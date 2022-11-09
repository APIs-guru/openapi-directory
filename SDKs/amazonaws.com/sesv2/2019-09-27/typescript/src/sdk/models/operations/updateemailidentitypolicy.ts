import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEmailIdentityPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PolicyName" })
  policyName: string;
}


export class UpdateEmailIdentityPolicyHeaders extends SpeakeasyBase {
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


export class UpdateEmailIdentityPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy: string;
}


export class UpdateEmailIdentityPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEmailIdentityPolicyPathParams;

  @Metadata()
  headers: UpdateEmailIdentityPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEmailIdentityPolicyRequestBody;
}


export class UpdateEmailIdentityPolicyResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateEmailIdentityPolicyResponse?: Map<string, any>;
}
