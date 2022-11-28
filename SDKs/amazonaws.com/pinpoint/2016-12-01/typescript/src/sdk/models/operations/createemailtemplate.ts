import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEmailTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class CreateEmailTemplateHeaders extends SpeakeasyBase {
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


// CreateEmailTemplateRequestBodyEmailTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in messages that are sent through the email channel.
**/
export class CreateEmailTemplateRequestBodyEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @SpeakeasyMetadata({ data: "json, name=HtmlPart" })
  htmlPart?: string;

  @SpeakeasyMetadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=TextPart" })
  textPart?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateEmailTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmailTemplateRequest" })
  emailTemplateRequest: CreateEmailTemplateRequestBodyEmailTemplateRequest;
}


export class CreateEmailTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateEmailTemplatePathParams;

  @SpeakeasyMetadata()
  headers: CreateEmailTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateEmailTemplateRequestBody;
}


export class CreateEmailTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createEmailTemplateResponse?: shared.CreateEmailTemplateResponse;

  @SpeakeasyMetadata()
  forbiddenException?: any;

  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
