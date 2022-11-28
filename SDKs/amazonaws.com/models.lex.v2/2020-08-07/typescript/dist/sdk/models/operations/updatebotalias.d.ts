import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBotAliasPathParams extends SpeakeasyBase {
    botAliasId: string;
    botId: string;
}
export declare class UpdateBotAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
**/
export declare class UpdateBotAliasRequestBodyConversationLogSettings extends SpeakeasyBase {
    audioLogSettings?: shared.AudioLogSetting[];
    textLogSettings?: shared.TextLogSetting[];
}
/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
export declare class UpdateBotAliasRequestBodySentimentAnalysisSettings extends SpeakeasyBase {
    detectSentiment?: boolean;
}
export declare class UpdateBotAliasRequestBody extends SpeakeasyBase {
    botAliasLocaleSettings?: Map<string, shared.BotAliasLocaleSettings>;
    botAliasName: string;
    botVersion?: string;
    conversationLogSettings?: UpdateBotAliasRequestBodyConversationLogSettings;
    description?: string;
    sentimentAnalysisSettings?: UpdateBotAliasRequestBodySentimentAnalysisSettings;
}
export declare class UpdateBotAliasRequest extends SpeakeasyBase {
    pathParams: UpdateBotAliasPathParams;
    headers: UpdateBotAliasHeaders;
    request: UpdateBotAliasRequestBody;
}
export declare class UpdateBotAliasResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateBotAliasResponse?: shared.UpdateBotAliasResponse;
    validationException?: any;
}
