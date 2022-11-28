import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV3OrdersIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetV3OrdersIdHeaders extends SpeakeasyBase {
    acceptLanguage?: string;
}
export declare class GetV3OrdersIdRequest extends SpeakeasyBase {
    pathParams: GetV3OrdersIdPathParams;
    headers: GetV3OrdersIdHeaders;
}
export declare class GetV3OrdersIdResponse extends SpeakeasyBase {
    contentType: string;
    orderDetail?: shared.OrderDetail;
    statusCode: number;
}
