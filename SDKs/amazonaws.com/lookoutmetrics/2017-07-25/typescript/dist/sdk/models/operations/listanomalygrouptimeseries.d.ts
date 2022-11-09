import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAnomalyGroupTimeSeriesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListAnomalyGroupTimeSeriesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnomalyGroupTimeSeriesRequestBody extends SpeakeasyBase {
    anomalyDetectorArn: string;
    anomalyGroupId: string;
    maxResults?: number;
    metricName: string;
    nextToken?: string;
}
export declare class ListAnomalyGroupTimeSeriesRequest extends SpeakeasyBase {
    queryParams: ListAnomalyGroupTimeSeriesQueryParams;
    headers: ListAnomalyGroupTimeSeriesHeaders;
    request: ListAnomalyGroupTimeSeriesRequestBody;
}
export declare class ListAnomalyGroupTimeSeriesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAnomalyGroupTimeSeriesResponse?: shared.ListAnomalyGroupTimeSeriesResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
