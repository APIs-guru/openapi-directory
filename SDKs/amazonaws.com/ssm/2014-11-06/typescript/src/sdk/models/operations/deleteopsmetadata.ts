import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteOpsMetadataXAmzTargetEnum {
    AmazonSsmDeleteOpsMetadata = "AmazonSSM.DeleteOpsMetadata"
}


export class DeleteOpsMetadataHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeleteOpsMetadataXAmzTargetEnum;
}


export class DeleteOpsMetadataRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteOpsMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteOpsMetadataRequest;
}


export class DeleteOpsMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteOpsMetadataResult?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  opsMetadataInvalidArgumentException?: any;

  @Metadata()
  opsMetadataNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
