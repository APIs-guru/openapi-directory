import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateShippingFulfillmentPathParams extends SpeakeasyBase {
    orderId: string;
}
export declare class CreateShippingFulfillmentSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateShippingFulfillmentRequest extends SpeakeasyBase {
    pathParams: CreateShippingFulfillmentPathParams;
    request: shared.ShippingFulfillmentDetails;
    security: CreateShippingFulfillmentSecurity;
}
export declare class CreateShippingFulfillmentResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    createShippingFulfillment201ApplicationJsonObject?: Map<string, any>;
}
