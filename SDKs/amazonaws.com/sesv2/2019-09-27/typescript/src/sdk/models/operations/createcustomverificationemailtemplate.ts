import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
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


export class CreateCustomVerificationEmailTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureRedirectionURL" })
  failureRedirectionUrl: string;

  @Metadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress: string;

  @Metadata({ data: "json, name=SuccessRedirectionURL" })
  successRedirectionUrl: string;

  @Metadata({ data: "json, name=TemplateContent" })
  templateContent: string;

  @Metadata({ data: "json, name=TemplateName" })
  templateName: string;

  @Metadata({ data: "json, name=TemplateSubject" })
  templateSubject: string;
}


export class CreateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateCustomVerificationEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateCustomVerificationEmailTemplateRequestBody;
}


export class CreateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  alreadyExistsException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createCustomVerificationEmailTemplateResponse?: Map<string, any>;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
