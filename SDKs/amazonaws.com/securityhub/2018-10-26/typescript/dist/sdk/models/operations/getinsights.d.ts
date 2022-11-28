import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInsightsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetInsightsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightsRequestBody extends SpeakeasyBase {
    insightArns?: string[];
    maxResults?: number;
    nextToken?: string;
}
export declare class GetInsightsRequest extends SpeakeasyBase {
    queryParams: GetInsightsQueryParams;
    headers: GetInsightsHeaders;
    request: GetInsightsRequestBody;
}
export declare class GetInsightsResponse extends SpeakeasyBase {
    contentType: string;
    getInsightsResponse?: shared.GetInsightsResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
