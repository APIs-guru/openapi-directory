import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderApiDeleteHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiDeleteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    orderDeleteApiModel?: shared.OrderDeleteApiModel;
    orderDeleteApiModel1?: shared.OrderDeleteApiModel;
    orderDeleteApiModel2?: shared.OrderDeleteApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class OrderApiDeleteRequest extends SpeakeasyBase {
    headers: OrderApiDeleteHeaders;
    request: OrderApiDeleteRequests;
}
export declare class OrderApiDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    orderApiDelete200ApplicationJsonInt32Integer?: number;
    orderApiDelete200TextJsonInt32Integer?: number;
    statusCode: number;
}
