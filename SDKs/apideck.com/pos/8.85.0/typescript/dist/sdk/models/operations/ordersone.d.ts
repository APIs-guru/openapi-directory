import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrdersOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OrdersOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OrdersOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrdersOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrdersOneRequest extends SpeakeasyBase {
    pathParams: OrdersOnePathParams;
    queryParams: OrdersOneQueryParams;
    headers: OrdersOneHeaders;
    security: OrdersOneSecurity;
}
export declare class OrdersOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getOrderResponse?: shared.GetOrderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
