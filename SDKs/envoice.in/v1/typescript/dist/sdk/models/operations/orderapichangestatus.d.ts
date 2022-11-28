import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderApiChangeStatusHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiChangeStatusRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    changeOrderStatusApiModel?: shared.ChangeOrderStatusApiModel;
    changeOrderStatusApiModel1?: shared.ChangeOrderStatusApiModel;
    changeOrderStatusApiModel2?: shared.ChangeOrderStatusApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class OrderApiChangeStatusRequest extends SpeakeasyBase {
    headers: OrderApiChangeStatusHeaders;
    request: OrderApiChangeStatusRequests;
}
export declare class OrderApiChangeStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
