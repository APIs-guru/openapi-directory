import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrdersPayPathParams extends SpeakeasyBase {
    id: string;
}
export declare class OrdersPayQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OrdersPayHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrdersPaySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrdersPayRequest extends SpeakeasyBase {
    pathParams: OrdersPayPathParams;
    queryParams: OrdersPayQueryParams;
    headers: OrdersPayHeaders;
    request: shared.OrderInput;
    security: OrdersPaySecurity;
}
export declare class OrdersPayResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createOrderResponse?: shared.CreateOrderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
