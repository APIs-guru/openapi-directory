import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
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


export class CreateCustomVerificationEmailTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FailureRedirectionURL" })
  failureRedirectionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress: string;

  @SpeakeasyMetadata({ data: "json, name=SuccessRedirectionURL" })
  successRedirectionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateContent" })
  templateContent: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateName" })
  templateName: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateSubject" })
  templateSubject: string;
}


export class CreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateCustomVerificationEmailTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateCustomVerificationEmailTemplateRequestBody;
}


export class CreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  alreadyExistsException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createCustomVerificationEmailTemplateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
