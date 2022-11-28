import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomerServiceMetricPathParams extends SpeakeasyBase {
    customerServiceMetricType: string;
    evaluationType: string;
}
export declare class GetCustomerServiceMetricQueryParams extends SpeakeasyBase {
    evaluationMarketplaceId: string;
}
export declare class GetCustomerServiceMetricSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCustomerServiceMetricRequest extends SpeakeasyBase {
    pathParams: GetCustomerServiceMetricPathParams;
    queryParams: GetCustomerServiceMetricQueryParams;
    security: GetCustomerServiceMetricSecurity;
}
export declare class GetCustomerServiceMetricResponse extends SpeakeasyBase {
    contentType: string;
    getCustomerServiceMetricResponse?: shared.GetCustomerServiceMetricResponse;
    statusCode: number;
}
