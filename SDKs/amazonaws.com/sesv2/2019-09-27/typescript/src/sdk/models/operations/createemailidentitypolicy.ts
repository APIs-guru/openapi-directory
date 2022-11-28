import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEmailIdentityPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PolicyName" })
  policyName: string;
}


export class CreateEmailIdentityPolicyHeaders extends SpeakeasyBase {
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
}


export class CreateEmailIdentityPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;
}


export class CreateEmailIdentityPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEmailIdentityPolicyPathParams;

  @SpeakeasyMetadata()
  headers: CreateEmailIdentityPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateEmailIdentityPolicyRequestBody;
}


export class CreateEmailIdentityPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createEmailIdentityPolicyResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
