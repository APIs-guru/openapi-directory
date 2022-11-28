import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTimeSeriesServiceStatisticsQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetTimeSeriesServiceStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTimeSeriesServiceStatisticsRequestBody extends SpeakeasyBase {
    endTime: Date;
    entitySelectorExpression?: string;
    forecastStatistics?: boolean;
    groupArn?: string;
    groupName?: string;
    nextToken?: string;
    period?: number;
    startTime: Date;
}
export declare class GetTimeSeriesServiceStatisticsRequest extends SpeakeasyBase {
    queryParams: GetTimeSeriesServiceStatisticsQueryParams;
    headers: GetTimeSeriesServiceStatisticsHeaders;
    request: GetTimeSeriesServiceStatisticsRequestBody;
}
export declare class GetTimeSeriesServiceStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    getTimeSeriesServiceStatisticsResult?: shared.GetTimeSeriesServiceStatisticsResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
