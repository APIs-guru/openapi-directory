import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsageStatisticsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class GetUsageStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
**/
export declare class GetUsageStatisticsRequestBodySortBy extends SpeakeasyBase {
    key?: shared.UsageStatisticsSortKeyEnum;
    orderBy?: shared.OrderByEnum;
}
export declare enum GetUsageStatisticsRequestBodyTimeRangeEnum {
    MonthToDate = "MONTH_TO_DATE",
    Past30Days = "PAST_30_DAYS"
}
export declare class GetUsageStatisticsRequestBody extends SpeakeasyBase {
    filterBy?: shared.UsageStatisticsFilter[];
    maxResults?: number;
    nextToken?: string;
    sortBy?: GetUsageStatisticsRequestBodySortBy;
    timeRange?: GetUsageStatisticsRequestBodyTimeRangeEnum;
}
export declare class GetUsageStatisticsRequest extends SpeakeasyBase {
    queryParams: GetUsageStatisticsQueryParams;
    headers: GetUsageStatisticsHeaders;
    request: GetUsageStatisticsRequestBody;
}
export declare class GetUsageStatisticsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getUsageStatisticsResponse?: shared.GetUsageStatisticsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
