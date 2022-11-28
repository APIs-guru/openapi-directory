import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class GetOrderQueryParams extends SpeakeasyBase {
    fieldGroups?: string;
}
export declare class GetOrderSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetOrderRequest extends SpeakeasyBase {
    pathParams: GetOrderPathParams;
    queryParams: GetOrderQueryParams;
    security: GetOrderSecurity;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    order?: shared.Order;
    statusCode: number;
}
