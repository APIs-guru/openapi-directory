import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderTypesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OrderTypesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OrderTypesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrderTypesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrderTypesUpdateRequest extends SpeakeasyBase {
    pathParams: OrderTypesUpdatePathParams;
    queryParams: OrderTypesUpdateQueryParams;
    headers: OrderTypesUpdateHeaders;
    request: shared.OrderTypeInput;
    security: OrderTypesUpdateSecurity;
}
export declare class OrderTypesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateOrderTypeResponse?: shared.UpdateOrderTypeResponse;
}
