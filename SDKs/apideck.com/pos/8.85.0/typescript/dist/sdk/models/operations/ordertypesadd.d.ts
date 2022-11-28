import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderTypesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OrderTypesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrderTypesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrderTypesAddRequest extends SpeakeasyBase {
    queryParams: OrderTypesAddQueryParams;
    headers: OrderTypesAddHeaders;
    request: shared.OrderTypeInput;
    security: OrderTypesAddSecurity;
}
export declare class OrderTypesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createOrderTypeResponse?: shared.CreateOrderTypeResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
