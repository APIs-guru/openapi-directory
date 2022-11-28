import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSubscriptionFiltersQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeSubscriptionFiltersXAmzTargetEnum {
    Logs20140328DescribeSubscriptionFilters = "Logs_20140328.DescribeSubscriptionFilters"
}
export declare class DescribeSubscriptionFiltersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubscriptionFiltersXAmzTargetEnum;
}
export declare class DescribeSubscriptionFiltersRequest extends SpeakeasyBase {
    queryParams: DescribeSubscriptionFiltersQueryParams;
    headers: DescribeSubscriptionFiltersHeaders;
    request: shared.DescribeSubscriptionFiltersRequest;
}
export declare class DescribeSubscriptionFiltersResponse extends SpeakeasyBase {
    contentType: string;
    describeSubscriptionFiltersResponse?: shared.DescribeSubscriptionFiltersResponse;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
