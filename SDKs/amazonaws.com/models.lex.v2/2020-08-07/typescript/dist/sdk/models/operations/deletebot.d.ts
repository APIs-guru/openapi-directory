import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBotPathParams extends SpeakeasyBase {
    botId: string;
}
export declare class DeleteBotQueryParams extends SpeakeasyBase {
    skipResourceInUseCheck?: boolean;
}
export declare class DeleteBotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBotRequest extends SpeakeasyBase {
    pathParams: DeleteBotPathParams;
    queryParams: DeleteBotQueryParams;
    headers: DeleteBotHeaders;
}
export declare class DeleteBotResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteBotResponse?: shared.DeleteBotResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
