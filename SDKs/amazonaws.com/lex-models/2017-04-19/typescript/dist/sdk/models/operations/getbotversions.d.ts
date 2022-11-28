import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBotVersionsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetBotVersionsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetBotVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBotVersionsRequest extends SpeakeasyBase {
    pathParams: GetBotVersionsPathParams;
    queryParams: GetBotVersionsQueryParams;
    headers: GetBotVersionsHeaders;
}
export declare class GetBotVersionsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getBotVersionsResponse?: shared.GetBotVersionsResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    statusCode: number;
}
