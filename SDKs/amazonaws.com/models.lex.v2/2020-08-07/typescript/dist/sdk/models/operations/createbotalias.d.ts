import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBotAliasPathParams extends SpeakeasyBase {
    botId: string;
}
export declare class CreateBotAliasHeaders extends SpeakeasyBase {
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
export declare class CreateBotAliasRequestBodyConversationLogSettings extends SpeakeasyBase {
    audioLogSettings?: shared.AudioLogSetting[];
    textLogSettings?: shared.TextLogSetting[];
}
/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
**/
export declare class CreateBotAliasRequestBodySentimentAnalysisSettings extends SpeakeasyBase {
    detectSentiment?: boolean;
}
export declare class CreateBotAliasRequestBody extends SpeakeasyBase {
    botAliasLocaleSettings?: Map<string, shared.BotAliasLocaleSettings>;
    botAliasName: string;
    botVersion?: string;
    conversationLogSettings?: CreateBotAliasRequestBodyConversationLogSettings;
    description?: string;
    sentimentAnalysisSettings?: CreateBotAliasRequestBodySentimentAnalysisSettings;
    tags?: Map<string, string>;
}
export declare class CreateBotAliasRequest extends SpeakeasyBase {
    pathParams: CreateBotAliasPathParams;
    headers: CreateBotAliasHeaders;
    request: CreateBotAliasRequestBody;
}
export declare class CreateBotAliasResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createBotAliasResponse?: shared.CreateBotAliasResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
