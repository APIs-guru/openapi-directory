import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEmailTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class CreateEmailTemplateHeaders extends SpeakeasyBase {
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


// CreateEmailTemplateRequestBodyEmailTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
**/
export class CreateEmailTemplateRequestBodyEmailTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=HtmlPart" })
  htmlPart?: string;

  @Metadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

  @Metadata({ data: "json, name=Subject" })
  subject?: string;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=TextPart" })
  textPart?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateEmailTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailTemplateRequest" })
  emailTemplateRequest: CreateEmailTemplateRequestBodyEmailTemplateRequest;
}


export class CreateEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateEmailTemplatePathParams;

  @Metadata()
  headers: CreateEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateEmailTemplateRequestBody;
}


export class CreateEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createEmailTemplateResponse?: shared.CreateEmailTemplateResponse;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
