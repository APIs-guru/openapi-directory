import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBotAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" })
  botAliasId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class UpdateBotAliasHeaders extends SpeakeasyBase {
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


// UpdateBotAliasRequestBodyConversationLogSettings
/** 
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
export class UpdateBotAliasRequestBodyConversationLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioLogSettings", elemType: shared.AudioLogSetting })
  audioLogSettings?: shared.AudioLogSetting[];

  @SpeakeasyMetadata({ data: "json, name=textLogSettings", elemType: shared.TextLogSetting })
  textLogSettings?: shared.TextLogSetting[];
}


// UpdateBotAliasRequestBodySentimentAnalysisSettings
/** 
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
export class UpdateBotAliasRequestBodySentimentAnalysisSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectSentiment" })
  detectSentiment?: boolean;
}


export class UpdateBotAliasRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAliasLocaleSettings", elemType: shared.BotAliasLocaleSettings })
  botAliasLocaleSettings?: Map<string, shared.BotAliasLocaleSettings>;

  @SpeakeasyMetadata({ data: "json, name=botAliasName" })
  botAliasName: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=conversationLogSettings" })
  conversationLogSettings?: UpdateBotAliasRequestBodyConversationLogSettings;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisSettings" })
  sentimentAnalysisSettings?: UpdateBotAliasRequestBodySentimentAnalysisSettings;
}


export class UpdateBotAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBotAliasPathParams;

  @SpeakeasyMetadata()
  headers: UpdateBotAliasHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateBotAliasRequestBody;
}


export class UpdateBotAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  updateBotAliasResponse?: shared.UpdateBotAliasResponse;

  @SpeakeasyMetadata()
  validationException?: any;
}
