import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEmailIdentityPolicyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=EmailIdentity" })
  emailIdentity: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=PolicyName" })
  policyName: string;
}


export class UpdateEmailIdentityPolicyHeaders extends SpeakeasyBase {
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


export class UpdateEmailIdentityPolicyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;
}


export class UpdateEmailIdentityPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateEmailIdentityPolicyPathParams;

  @SpeakeasyMetadata()
  headers: UpdateEmailIdentityPolicyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateEmailIdentityPolicyRequestBody;
}


export class UpdateEmailIdentityPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  @SpeakeasyMetadata()
  updateEmailIdentityPolicyResponse?: Map<string, any>;
}
