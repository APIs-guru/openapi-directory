import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateBotAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botAliasId" })
  botAliasId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class UpdateBotAliasHeaders extends SpeakeasyBase {
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


// UpdateBotAliasRequestBodyConversationLogSettings
/** 
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
export class UpdateBotAliasRequestBodyConversationLogSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioLogSettings", elemType: shared.AudioLogSetting })
  audioLogSettings?: shared.AudioLogSetting[];

  @Metadata({ data: "json, name=textLogSettings", elemType: shared.TextLogSetting })
  textLogSettings?: shared.TextLogSetting[];
}


// UpdateBotAliasRequestBodySentimentAnalysisSettings
/** 
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
export class UpdateBotAliasRequestBodySentimentAnalysisSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectSentiment" })
  detectSentiment?: boolean;
}


export class UpdateBotAliasRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAliasLocaleSettings", elemType: shared.BotAliasLocaleSettings })
  botAliasLocaleSettings?: Map<string, shared.BotAliasLocaleSettings>;

  @Metadata({ data: "json, name=botAliasName" })
  botAliasName: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=conversationLogSettings" })
  conversationLogSettings?: UpdateBotAliasRequestBodyConversationLogSettings;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=sentimentAnalysisSettings" })
  sentimentAnalysisSettings?: UpdateBotAliasRequestBodySentimentAnalysisSettings;
}


export class UpdateBotAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateBotAliasPathParams;

  @Metadata()
  headers: UpdateBotAliasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateBotAliasRequestBody;
}


export class UpdateBotAliasResponse extends SpeakeasyBase {
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
  updateBotAliasResponse?: shared.UpdateBotAliasResponse;

  @Metadata()
  validationException?: any;
}
