import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInsightSummariesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetInsightSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightSummariesRequestBody extends SpeakeasyBase {
    endTime: Date;
    groupArn?: string;
    groupName?: string;
    maxResults?: number;
    nextToken?: string;
    startTime: Date;
    states?: shared.InsightStateEnum[];
}
export declare class GetInsightSummariesRequest extends SpeakeasyBase {
    queryParams: GetInsightSummariesQueryParams;
    headers: GetInsightSummariesHeaders;
    request: GetInsightSummariesRequestBody;
}
export declare class GetInsightSummariesResponse extends SpeakeasyBase {
    contentType: string;
    getInsightSummariesResult?: shared.GetInsightSummariesResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
