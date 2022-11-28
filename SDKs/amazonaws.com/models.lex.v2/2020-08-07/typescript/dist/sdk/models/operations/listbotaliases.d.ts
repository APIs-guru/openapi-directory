import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBotAliasesPathParams extends SpeakeasyBase {
    botId: string;
}
export declare class ListBotAliasesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListBotAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListBotAliasesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListBotAliasesRequest extends SpeakeasyBase {
    pathParams: ListBotAliasesPathParams;
    queryParams: ListBotAliasesQueryParams;
    headers: ListBotAliasesHeaders;
    request: ListBotAliasesRequestBody;
}
export declare class ListBotAliasesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listBotAliasesResponse?: shared.ListBotAliasesResponse;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
