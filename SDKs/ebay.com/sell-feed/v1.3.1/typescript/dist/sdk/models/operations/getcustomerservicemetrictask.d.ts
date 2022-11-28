import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomerServiceMetricTaskPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetCustomerServiceMetricTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCustomerServiceMetricTaskRequest extends SpeakeasyBase {
    pathParams: GetCustomerServiceMetricTaskPathParams;
    security: GetCustomerServiceMetricTaskSecurity;
}
export declare class GetCustomerServiceMetricTaskResponse extends SpeakeasyBase {
    contentType: string;
    serviceMetricsTask?: shared.ServiceMetricsTask;
    statusCode: number;
}
