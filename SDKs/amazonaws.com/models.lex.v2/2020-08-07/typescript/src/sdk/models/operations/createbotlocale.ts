import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBotLocalePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;
}


export class CreateBotLocaleHeaders extends SpeakeasyBase {
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


// CreateBotLocaleRequestBodyVoiceSettings
/** 
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
export class CreateBotLocaleRequestBodyVoiceSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=voiceId" })
  voiceId?: string;
}


export class CreateBotLocaleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=localeId" })
  localeId: string;

  @Metadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold: number;

  @Metadata({ data: "json, name=voiceSettings" })
  voiceSettings?: CreateBotLocaleRequestBodyVoiceSettings;
}


export class CreateBotLocaleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateBotLocalePathParams;

  @Metadata()
  headers: CreateBotLocaleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBotLocaleRequestBody;
}


export class CreateBotLocaleResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBotLocaleResponse?: shared.CreateBotLocaleResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
