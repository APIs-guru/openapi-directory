import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEmailIdentityPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=PolicyName" })
  policyName: string;
}


export class CreateEmailIdentityPolicyHeaders extends SpeakeasyBase {
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


export class CreateEmailIdentityPolicyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy: string;
}


export class CreateEmailIdentityPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateEmailIdentityPolicyPathParams;

  @Metadata()
  headers: CreateEmailIdentityPolicyHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateEmailIdentityPolicyRequestBody;
}


export class CreateEmailIdentityPolicyResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEmailIdentityPolicyResponse?: Map<string, any>;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
