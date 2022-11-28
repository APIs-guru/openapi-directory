import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBotAliasPathParams extends SpeakeasyBase {
    botAliasId: string;
    botId: string;
}
export declare class DeleteBotAliasQueryParams extends SpeakeasyBase {
    skipResourceInUseCheck?: boolean;
}
export declare class DeleteBotAliasHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBotAliasRequest extends SpeakeasyBase {
    pathParams: DeleteBotAliasPathParams;
    queryParams: DeleteBotAliasQueryParams;
    headers: DeleteBotAliasHeaders;
}
export declare class DeleteBotAliasResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    deleteBotAliasResponse?: shared.DeleteBotAliasResponse;
    internalServerException?: any;
    preconditionFailedException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
