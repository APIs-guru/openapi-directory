import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCorsPolicyXAmzTargetEnum {
    MediaStore20170901GetCorsPolicy = "MediaStore_20170901.GetCorsPolicy"
}


export class GetCorsPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCorsPolicyXAmzTargetEnum;
}


export class GetCorsPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetCorsPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCorsPolicyInput;
}


export class GetCorsPolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  corsPolicyNotFoundException?: any;

  @Metadata()
  getCorsPolicyOutput?: shared.GetCorsPolicyOutput;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
