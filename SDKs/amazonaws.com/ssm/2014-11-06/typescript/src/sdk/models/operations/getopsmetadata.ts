import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetOpsMetadataXAmzTargetEnum {
    AmazonSsmGetOpsMetadata = "AmazonSSM.GetOpsMetadata"
}


export class GetOpsMetadataHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetOpsMetadataXAmzTargetEnum;
}


export class GetOpsMetadataRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetOpsMetadataHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetOpsMetadataRequest;
}


export class GetOpsMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getOpsMetadataResult?: shared.GetOpsMetadataResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  opsMetadataInvalidArgumentException?: any;

  @Metadata()
  opsMetadataNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
