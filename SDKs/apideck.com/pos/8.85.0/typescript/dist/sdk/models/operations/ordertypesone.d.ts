import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderTypesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OrderTypesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OrderTypesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrderTypesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrderTypesOneRequest extends SpeakeasyBase {
    pathParams: OrderTypesOnePathParams;
    queryParams: OrderTypesOneQueryParams;
    headers: OrderTypesOneHeaders;
    security: OrderTypesOneSecurity;
}
export declare class OrderTypesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getOrderTypeResponse?: shared.GetOrderTypeResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
