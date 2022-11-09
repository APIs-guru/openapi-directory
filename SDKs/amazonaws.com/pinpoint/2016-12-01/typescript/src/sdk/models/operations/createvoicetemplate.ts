import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVoiceTemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class CreateVoiceTemplateHeaders extends SpeakeasyBase {
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


// CreateVoiceTemplateRequestBodyVoiceTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
**/
export class CreateVoiceTemplateRequestBodyVoiceTemplateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @Metadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @Metadata({ data: "json, name=VoiceId" })
  voiceId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateVoiceTemplateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=VoiceTemplateRequest" })
  voiceTemplateRequest: CreateVoiceTemplateRequestBodyVoiceTemplateRequest;
}


export class CreateVoiceTemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVoiceTemplatePathParams;

  @Metadata()
  headers: CreateVoiceTemplateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateVoiceTemplateRequestBody;
}


export class CreateVoiceTemplateResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createVoiceTemplateResponse?: shared.CreateVoiceTemplateResponse;

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
