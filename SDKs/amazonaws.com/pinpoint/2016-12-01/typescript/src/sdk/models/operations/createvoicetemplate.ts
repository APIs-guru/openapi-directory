import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVoiceTemplatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template-name" })
  templateName: string;
}


export class CreateVoiceTemplateHeaders extends SpeakeasyBase {
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


// CreateVoiceTemplateRequestBodyVoiceTemplateRequest
/** 
 * Specifies the content and settings for a message template that can be used in messages that are sent through the voice channel.
**/
export class CreateVoiceTemplateRequestBodyVoiceTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultSubstitutions" })
  defaultSubstitutions?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=TemplateDescription" })
  templateDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=VoiceId" })
  voiceId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateVoiceTemplateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=VoiceTemplateRequest" })
  voiceTemplateRequest: CreateVoiceTemplateRequestBodyVoiceTemplateRequest;
}


export class CreateVoiceTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVoiceTemplatePathParams;

  @SpeakeasyMetadata()
  headers: CreateVoiceTemplateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateVoiceTemplateRequestBody;
}


export class CreateVoiceTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createVoiceTemplateResponse?: shared.CreateVoiceTemplateResponse;

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
