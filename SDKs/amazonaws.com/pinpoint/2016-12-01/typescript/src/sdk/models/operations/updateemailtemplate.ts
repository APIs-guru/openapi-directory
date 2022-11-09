import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateEmailTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class UpdateEmailTemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=create-new-version" })
  createNewVersion?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=version" })
  version?: string;
}


export class UpdateEmailTemplateHeaders extends SpeakeasyBase {
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


// UpdateEmailTemplateRequestBodyEmailTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
**/
export class UpdateEmailTemplateRequestBodyEmailTemplateRequest extends SpeakeasyBase {
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


export class UpdateEmailTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmailTemplateRequest" })
  emailTemplateRequest: UpdateEmailTemplateRequestBodyEmailTemplateRequest;
}


export class UpdateEmailTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateEmailTemplatePathParams;

  @Metadata()
  queryParams: UpdateEmailTemplateQueryParams;

  @Metadata()
  headers: UpdateEmailTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateEmailTemplateRequestBody;
}


export class UpdateEmailTemplateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  forbiddenException?: any;

  @Metadata()
  internalServerErrorException?: any;

  @Metadata()
  methodNotAllowedException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  payloadTooLargeException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;

  @Metadata()
  updateEmailTemplateResponse?: shared.UpdateEmailTemplateResponse;
}
