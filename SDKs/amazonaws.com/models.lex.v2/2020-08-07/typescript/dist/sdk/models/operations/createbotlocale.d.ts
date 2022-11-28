import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBotLocalePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
}
export declare class CreateBotLocaleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
**/
export declare class CreateBotLocaleRequestBodyVoiceSettings extends SpeakeasyBase {
    voiceId?: string;
}
export declare class CreateBotLocaleRequestBody extends SpeakeasyBase {
    description?: string;
    localeId: string;
    nluIntentConfidenceThreshold: number;
    voiceSettings?: CreateBotLocaleRequestBodyVoiceSettings;
}
export declare class CreateBotLocaleRequest extends SpeakeasyBase {
    pathParams: CreateBotLocalePathParams;
    headers: CreateBotLocaleHeaders;
    request: CreateBotLocaleRequestBody;
}
export declare class CreateBotLocaleResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createBotLocaleResponse?: shared.CreateBotLocaleResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
