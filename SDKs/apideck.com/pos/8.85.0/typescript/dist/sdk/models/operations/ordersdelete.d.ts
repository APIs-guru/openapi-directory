import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrdersDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OrdersDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OrdersDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrdersDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrdersDeleteRequest extends SpeakeasyBase {
    pathParams: OrdersDeletePathParams;
    queryParams: OrdersDeleteQueryParams;
    headers: OrdersDeleteHeaders;
    security: OrdersDeleteSecurity;
}
export declare class OrdersDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteOrderResponse?: shared.DeleteOrderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
