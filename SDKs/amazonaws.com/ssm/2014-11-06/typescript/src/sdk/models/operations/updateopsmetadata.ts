import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum UpdateOpsMetadataXAmzTargetEnum {
    AmazonSsmUpdateOpsMetadata = "AmazonSSM.UpdateOpsMetadata"
}


export class UpdateOpsMetadataHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: UpdateOpsMetadataXAmzTargetEnum;
}


export class UpdateOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UpdateOpsMetadataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.UpdateOpsMetadataRequest;
}


export class UpdateOpsMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  opsMetadataInvalidArgumentException?: any;

  @SpeakeasyMetadata()
  opsMetadataKeyLimitExceededException?: any;

  @SpeakeasyMetadata()
  opsMetadataNotFoundException?: any;

  @SpeakeasyMetadata()
  opsMetadataTooManyUpdatesException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOpsMetadataResult?: shared.UpdateOpsMetadataResult;
}
