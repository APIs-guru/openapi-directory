import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeMetricFiltersQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeMetricFiltersXAmzTargetEnum {
    Logs20140328DescribeMetricFilters = "Logs_20140328.DescribeMetricFilters"
}
export declare class DescribeMetricFiltersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMetricFiltersXAmzTargetEnum;
}
export declare class DescribeMetricFiltersRequest extends SpeakeasyBase {
    queryParams: DescribeMetricFiltersQueryParams;
    headers: DescribeMetricFiltersHeaders;
    request: shared.DescribeMetricFiltersRequest;
}
export declare class DescribeMetricFiltersResponse extends SpeakeasyBase {
    contentType: string;
    describeMetricFiltersResponse?: shared.DescribeMetricFiltersResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
