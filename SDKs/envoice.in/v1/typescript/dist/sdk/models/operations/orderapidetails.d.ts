import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderApiDetailsQueryParams extends SpeakeasyBase {
    id: number;
}
export declare class OrderApiDetailsHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiDetailsRequest extends SpeakeasyBase {
    queryParams: OrderApiDetailsQueryParams;
    headers: OrderApiDetailsHeaders;
}
export declare class OrderApiDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    orderFullDetailsApiModel?: shared.OrderFullDetailsApiModel;
    statusCode: number;
}
