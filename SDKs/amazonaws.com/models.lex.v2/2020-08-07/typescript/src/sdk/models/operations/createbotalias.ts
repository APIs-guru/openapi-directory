import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateBotAliasPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=botId" })
  botId: string;
}


export class CreateBotAliasHeaders extends SpeakeasyBase {
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


// CreateBotAliasRequestBodyConversationLogSettings
/** 
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
export class CreateBotAliasRequestBodyConversationLogSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioLogSettings", elemType: shared.AudioLogSetting })
  audioLogSettings?: shared.AudioLogSetting[];

  @SpeakeasyMetadata({ data: "json, name=textLogSettings", elemType: shared.TextLogSetting })
  textLogSettings?: shared.TextLogSetting[];
}


// CreateBotAliasRequestBodySentimentAnalysisSettings
/** 
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
export class CreateBotAliasRequestBodySentimentAnalysisSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detectSentiment" })
  detectSentiment?: boolean;
}


export class CreateBotAliasRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=botAliasLocaleSettings", elemType: shared.BotAliasLocaleSettings })
  botAliasLocaleSettings?: Map<string, shared.BotAliasLocaleSettings>;

  @SpeakeasyMetadata({ data: "json, name=botAliasName" })
  botAliasName: string;

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=conversationLogSettings" })
  conversationLogSettings?: CreateBotAliasRequestBodyConversationLogSettings;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=sentimentAnalysisSettings" })
  sentimentAnalysisSettings?: CreateBotAliasRequestBodySentimentAnalysisSettings;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}


export class CreateBotAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateBotAliasPathParams;

  @SpeakeasyMetadata()
  headers: CreateBotAliasHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateBotAliasRequestBody;
}


export class CreateBotAliasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createBotAliasResponse?: shared.CreateBotAliasResponse;

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
  validationException?: any;
}
