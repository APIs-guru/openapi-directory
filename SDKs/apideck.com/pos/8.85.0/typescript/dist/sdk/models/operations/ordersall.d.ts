import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrdersAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    locationId?: string;
    raw?: boolean;
}
export declare class OrdersAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrdersAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrdersAllRequest extends SpeakeasyBase {
    queryParams: OrdersAllQueryParams;
    headers: OrdersAllHeaders;
    security: OrdersAllSecurity;
}
export declare class OrdersAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getOrdersResponse?: shared.GetOrdersResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
