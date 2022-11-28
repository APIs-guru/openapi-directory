import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum CreateOpsMetadataXAmzTargetEnum {
    AmazonSsmCreateOpsMetadata = "AmazonSSM.CreateOpsMetadata"
}


export class CreateOpsMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateOpsMetadataXAmzTargetEnum;
}


export class CreateOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateOpsMetadataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateOpsMetadataRequest;
}


export class CreateOpsMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createOpsMetadataResult?: shared.CreateOpsMetadataResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  opsMetadataAlreadyExistsException?: any;

  @SpeakeasyMetadata()
  opsMetadataInvalidArgumentException?: any;

  @SpeakeasyMetadata()
  opsMetadataLimitExceededException?: any;

  @SpeakeasyMetadata()
  opsMetadataTooManyUpdatesException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
