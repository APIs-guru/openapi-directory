import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderTypesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class OrderTypesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrderTypesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrderTypesAllRequest extends SpeakeasyBase {
    queryParams: OrderTypesAllQueryParams;
    headers: OrderTypesAllHeaders;
    security: OrderTypesAllSecurity;
}
export declare class OrderTypesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getOrderTypesResponse?: shared.GetOrderTypesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
