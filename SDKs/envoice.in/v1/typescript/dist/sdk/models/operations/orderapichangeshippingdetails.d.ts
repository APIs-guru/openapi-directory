import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderApiChangeShippingDetailsQueryParams extends SpeakeasyBase {
    orderId: number;
}
export declare class OrderApiChangeShippingDetailsHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiChangeShippingDetailsRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    orderShippingDetailsApiModel?: shared.OrderShippingDetailsApiModel;
    orderShippingDetailsApiModel1?: shared.OrderShippingDetailsApiModel;
    orderShippingDetailsApiModel2?: shared.OrderShippingDetailsApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class OrderApiChangeShippingDetailsRequest extends SpeakeasyBase {
    queryParams: OrderApiChangeShippingDetailsQueryParams;
    headers: OrderApiChangeShippingDetailsHeaders;
    request: OrderApiChangeShippingDetailsRequests;
}
export declare class OrderApiChangeShippingDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
