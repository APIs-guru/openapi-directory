import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomerServiceMetricTaskHeaders extends SpeakeasyBase {
    acceptLanguage: string;
}
export declare class CreateCustomerServiceMetricTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateCustomerServiceMetricTaskRequest extends SpeakeasyBase {
    headers: CreateCustomerServiceMetricTaskHeaders;
    request: shared.CreateServiceMetricsTaskRequest;
    security: CreateCustomerServiceMetricTaskSecurity;
}
export declare class CreateCustomerServiceMetricTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
