import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetShippingFulfillmentsPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class GetShippingFulfillmentsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetShippingFulfillmentsRequest extends SpeakeasyBase {
    pathParams: GetShippingFulfillmentsPathParams;
    security: GetShippingFulfillmentsSecurity;
}
export declare class GetShippingFulfillmentsResponse extends SpeakeasyBase {
    contentType: string;
    shippingFulfillmentPagedCollection?: shared.ShippingFulfillmentPagedCollection;
    statusCode: number;
}
