import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInsightEventsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetInsightEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightEventsRequestBody extends SpeakeasyBase {
    insightId: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class GetInsightEventsRequest extends SpeakeasyBase {
    queryParams: GetInsightEventsQueryParams;
    headers: GetInsightEventsHeaders;
    request: GetInsightEventsRequestBody;
}
export declare class GetInsightEventsResponse extends SpeakeasyBase {
    contentType: string;
    getInsightEventsResult?: shared.GetInsightEventsResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
