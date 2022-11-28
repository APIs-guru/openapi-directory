import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteOpsMetadataXAmzTargetEnum {
    AmazonSsmDeleteOpsMetadata = "AmazonSSM.DeleteOpsMetadata"
}


export class DeleteOpsMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteOpsMetadataXAmzTargetEnum;
}


export class DeleteOpsMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteOpsMetadataHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteOpsMetadataRequest;
}


export class DeleteOpsMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteOpsMetadataResult?: Map<string, any>;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  opsMetadataInvalidArgumentException?: any;

  @SpeakeasyMetadata()
  opsMetadataNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
