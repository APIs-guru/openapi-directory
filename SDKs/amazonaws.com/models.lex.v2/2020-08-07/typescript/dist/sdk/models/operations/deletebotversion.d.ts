import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBotVersionPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
}
export declare class DeleteBotVersionQueryParams extends SpeakeasyBase {
    skipResourceInUseCheck?: boolean;
}
export declare class DeleteBotVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBotVersionRequest extends SpeakeasyBase {
    pathParams: DeleteBotVersionPathParams;
    queryParams: DeleteBotVersionQueryParams;
    headers: DeleteBotVersionHeaders;
}
export declare class DeleteBotVersionResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteBotVersionResponse?: shared.DeleteBotVersionResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
