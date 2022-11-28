import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBotHeaders extends SpeakeasyBase {
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
export declare class CreateBotRequestBodyDataPrivacy extends SpeakeasyBase {
    childDirected?: boolean;
}
export declare class CreateBotRequestBody extends SpeakeasyBase {
    botName: string;
    botTags?: Map<string, string>;
    dataPrivacy: CreateBotRequestBodyDataPrivacy;
    description?: string;
    idleSessionTtlInSeconds: number;
    roleArn: string;
    testBotAliasTags?: Map<string, string>;
}
export declare class CreateBotRequest extends SpeakeasyBase {
    headers: CreateBotHeaders;
    request: CreateBotRequestBody;
}
export declare class CreateBotResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createBotResponse?: shared.CreateBotResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
