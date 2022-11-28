import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBotVersionPathParams extends SpeakeasyBase {
    botId: string;
}
export declare class CreateBotVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBotVersionRequestBody extends SpeakeasyBase {
    botVersionLocaleSpecification: Map<string, shared.BotVersionLocaleDetails>;
    description?: string;
}
export declare class CreateBotVersionRequest extends SpeakeasyBase {
    pathParams: CreateBotVersionPathParams;
    headers: CreateBotVersionHeaders;
    request: CreateBotVersionRequestBody;
}
export declare class CreateBotVersionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    createBotVersionResponse?: shared.CreateBotVersionResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
