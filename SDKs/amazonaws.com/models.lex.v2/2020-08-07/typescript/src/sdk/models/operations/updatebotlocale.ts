import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBotLocalePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botVersion" })
  botVersion: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=localeId" })
  localeId: string;
}


export class UpdateBotLocaleHeaders extends SpeakeasyBase {
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


// UpdateBotLocaleRequestBodyVoiceSettings
/** 
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
export class UpdateBotLocaleRequestBodyVoiceSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=voiceId" })
  voiceId?: string;
}


export class UpdateBotLocaleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold: number;

  @Metadata({ data: "json, name=voiceSettings" })
  voiceSettings?: UpdateBotLocaleRequestBodyVoiceSettings;
}


export class UpdateBotLocaleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBotLocalePathParams;

  @Metadata()
  headers: UpdateBotLocaleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBotLocaleRequestBody;
}


export class UpdateBotLocaleResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

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
  updateBotLocaleResponse?: shared.UpdateBotLocaleResponse;

  @Metadata()
  validationException?: any;
}
