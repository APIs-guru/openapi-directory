import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateResourcePolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resourceArn" })
  resourceArn: string;
}


export class CreateResourcePolicyHeaders extends SpeakeasyBase {
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
}


export class CreateResourcePolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy: string;
}


export class CreateResourcePolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateResourcePolicyPathParams;

  @Metadata()
  headers: CreateResourcePolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateResourcePolicyRequestBody;
}


export class CreateResourcePolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createResourcePolicyResponse?: shared.CreateResourcePolicyResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
