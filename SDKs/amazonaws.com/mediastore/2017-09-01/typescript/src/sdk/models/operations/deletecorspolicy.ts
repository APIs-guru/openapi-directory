import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteCorsPolicyXAmzTargetEnum {
    MediaStore20170901DeleteCorsPolicy = "MediaStore_20170901.DeleteCorsPolicy"
}


export class DeleteCorsPolicyHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteCorsPolicyXAmzTargetEnum;
}


export class DeleteCorsPolicyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteCorsPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteCorsPolicyInput;
}


export class DeleteCorsPolicyResponse extends SpeakeasyBase {
  @Metadata()
  containerInUseException?: any;

  @Metadata()
  containerNotFoundException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  corsPolicyNotFoundException?: any;

  @Metadata()
  deleteCorsPolicyOutput?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;
}
