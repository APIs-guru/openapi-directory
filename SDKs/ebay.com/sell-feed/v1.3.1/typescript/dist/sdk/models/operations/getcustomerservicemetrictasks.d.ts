import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomerServiceMetricTasksQueryParams extends SpeakeasyBase {
    dateRange?: string;
    feedType?: string;
    limit?: string;
    lookBackDays?: string;
    offset?: string;
}
export declare class GetCustomerServiceMetricTasksSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCustomerServiceMetricTasksRequest extends SpeakeasyBase {
    queryParams: GetCustomerServiceMetricTasksQueryParams;
    security: GetCustomerServiceMetricTasksSecurity;
}
export declare class GetCustomerServiceMetricTasksResponse extends SpeakeasyBase {
    contentType: string;
    customerServiceMetricTaskCollection?: shared.CustomerServiceMetricTaskCollection;
    statusCode: number;
}
