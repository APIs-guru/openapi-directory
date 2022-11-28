import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBotPathParams extends SpeakeasyBase {
    botId: string;
}
export declare class UpdateBotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
**/
export declare class UpdateBotRequestBodyDataPrivacy extends SpeakeasyBase {
    childDirected?: boolean;
}
export declare class UpdateBotRequestBody extends SpeakeasyBase {
    botName: string;
    dataPrivacy: UpdateBotRequestBodyDataPrivacy;
    description?: string;
    idleSessionTtlInSeconds: number;
    roleArn: string;
}
export declare class UpdateBotRequest extends SpeakeasyBase {
    pathParams: UpdateBotPathParams;
    headers: UpdateBotHeaders;
    request: UpdateBotRequestBody;
}
export declare class UpdateBotResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateBotResponse?: shared.UpdateBotResponse;
    validationException?: any;
}
