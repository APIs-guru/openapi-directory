import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBotLocalePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
}
export declare class DeleteBotLocaleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBotLocaleRequest extends SpeakeasyBase {
    pathParams: DeleteBotLocalePathParams;
    headers: DeleteBotLocaleHeaders;
}
export declare class DeleteBotLocaleResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteBotLocaleResponse?: shared.DeleteBotLocaleResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
