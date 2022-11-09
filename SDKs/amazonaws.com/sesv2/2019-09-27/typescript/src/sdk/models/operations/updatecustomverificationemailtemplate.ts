import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateCustomVerificationEmailTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=TemplateName" })
  templateName: string;
}


export class UpdateCustomVerificationEmailTemplateHeaders extends SpeakeasyBase {
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


export class UpdateCustomVerificationEmailTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=FailureRedirectionURL" })
  failureRedirectionUrl: string;

  @Metadata({ data: "json, name=FromEmailAddress" })
  fromEmailAddress: string;

  @Metadata({ data: "json, name=SuccessRedirectionURL" })
  successRedirectionUrl: string;

  @Metadata({ data: "json, name=TemplateContent" })
  templateContent: string;

  @Metadata({ data: "json, name=TemplateSubject" })
  templateSubject: string;
}


export class UpdateCustomVerificationEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCustomVerificationEmailTemplatePathParams;

  @Metadata()
  headers: UpdateCustomVerificationEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateCustomVerificationEmailTemplateRequestBody;
}


export class UpdateCustomVerificationEmailTemplateResponse extends SpeakeasyBase {
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
  updateCustomVerificationEmailTemplateResponse?: Map<string, any>;
}
