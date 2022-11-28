import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBotLocalePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
}
export declare class UpdateBotLocaleHeaders extends SpeakeasyBase {
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
export declare class UpdateBotLocaleRequestBodyVoiceSettings extends SpeakeasyBase {
    voiceId?: string;
}
export declare class UpdateBotLocaleRequestBody extends SpeakeasyBase {
    description?: string;
    nluIntentConfidenceThreshold: number;
    voiceSettings?: UpdateBotLocaleRequestBodyVoiceSettings;
}
export declare class UpdateBotLocaleRequest extends SpeakeasyBase {
    pathParams: UpdateBotLocalePathParams;
    headers: UpdateBotLocaleHeaders;
    request: UpdateBotLocaleRequestBody;
}
export declare class UpdateBotLocaleResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateBotLocaleResponse?: shared.UpdateBotLocaleResponse;
    validationException?: any;
}
