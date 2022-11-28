import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShippingFulfillmentPathParams extends SpeakeasyBase {
    fulfillmentId: string;
    orderId: string;
}
export declare class GetShippingFulfillmentSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetShippingFulfillmentRequest extends SpeakeasyBase {
    pathParams: GetShippingFulfillmentPathParams;
    security: GetShippingFulfillmentSecurity;
}
export declare class GetShippingFulfillmentResponse extends SpeakeasyBase {
    contentType: string;
    shippingFulfillment?: shared.ShippingFulfillment;
    statusCode: number;
}
