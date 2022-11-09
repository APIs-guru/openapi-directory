import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSmsTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class CreateSmsTemplateHeaders extends SpeakeasyBase {
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


// CreateSmsTemplateRequestBodySmsTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
**/
export class CreateSmsTemplateRequestBodySmsTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=RecommenderId" })
  recommenderId?: string;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateSmsTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=SMSTemplateRequest" })
  smsTemplateRequest: CreateSmsTemplateRequestBodySmsTemplateRequest;
}


export class CreateSmsTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSmsTemplatePathParams;

  @Metadata()
  headers: CreateSmsTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSmsTemplateRequestBody;
}


export class CreateSmsTemplateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createSmsTemplateResponse?: shared.CreateSmsTemplateResponse;

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
