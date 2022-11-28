import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BuildBotLocalePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
}
export declare class BuildBotLocaleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BuildBotLocaleRequest extends SpeakeasyBase {
    pathParams: BuildBotLocalePathParams;
    headers: BuildBotLocaleHeaders;
}
export declare class BuildBotLocaleResponse extends SpeakeasyBase {
    buildBotLocaleResponse?: shared.BuildBotLocaleResponse;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
