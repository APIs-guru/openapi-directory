import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBotAliasesPathParams extends SpeakeasyBase {
    botName: string;
}
export declare class GetBotAliasesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
}
export declare class GetBotAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBotAliasesRequest extends SpeakeasyBase {
    pathParams: GetBotAliasesPathParams;
    queryParams: GetBotAliasesQueryParams;
    headers: GetBotAliasesHeaders;
}
export declare class GetBotAliasesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBotAliasesResponse?: shared.GetBotAliasesResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
