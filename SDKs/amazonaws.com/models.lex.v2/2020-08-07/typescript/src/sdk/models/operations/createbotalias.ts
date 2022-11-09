import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateBotAliasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class CreateBotAliasHeaders extends SpeakeasyBase {
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


// CreateBotAliasRequestBodyConversationLogSettings
/** 
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
export class CreateBotAliasRequestBodyConversationLogSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioLogSettings", elemType: shared.AudioLogSetting })
  audioLogSettings?: shared.AudioLogSetting[];

  @Metadata({ data: "json, name=textLogSettings", elemType: shared.TextLogSetting })
  textLogSettings?: shared.TextLogSetting[];
}


// CreateBotAliasRequestBodySentimentAnalysisSettings
/** 
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
export class CreateBotAliasRequestBodySentimentAnalysisSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=detectSentiment" })
  detectSentiment?: boolean;
}


export class CreateBotAliasRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=botAliasLocaleSettings", elemType: shared.BotAliasLocaleSettings })
  botAliasLocaleSettings?: Map<string, shared.BotAliasLocaleSettings>;

  @Metadata({ data: "json, name=botAliasName" })
  botAliasName: string;

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=conversationLogSettings" })
  conversationLogSettings?: CreateBotAliasRequestBodyConversationLogSettings;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=sentimentAnalysisSettings" })
  sentimentAnalysisSettings?: CreateBotAliasRequestBodySentimentAnalysisSettings;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateBotAliasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateBotAliasPathParams;

  @Metadata()
  headers: CreateBotAliasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateBotAliasRequestBody;
}


export class CreateBotAliasResponse extends SpeakeasyBase {
  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createBotAliasResponse?: shared.CreateBotAliasResponse;

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
