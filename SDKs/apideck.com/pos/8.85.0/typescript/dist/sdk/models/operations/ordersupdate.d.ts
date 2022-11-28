import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrdersUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OrdersUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OrdersUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrdersUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrdersUpdateRequest extends SpeakeasyBase {
    pathParams: OrdersUpdatePathParams;
    queryParams: OrdersUpdateQueryParams;
    headers: OrdersUpdateHeaders;
    request: shared.OrderInput;
    security: OrdersUpdateSecurity;
}
export declare class OrdersUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateOrderResponse?: shared.UpdateOrderResponse;
}
