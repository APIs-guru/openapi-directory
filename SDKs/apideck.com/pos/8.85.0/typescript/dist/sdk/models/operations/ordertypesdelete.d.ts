import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderTypesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OrderTypesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OrderTypesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OrderTypesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OrderTypesDeleteRequest extends SpeakeasyBase {
    pathParams: OrderTypesDeletePathParams;
    queryParams: OrderTypesDeleteQueryParams;
    headers: OrderTypesDeleteHeaders;
    security: OrderTypesDeleteSecurity;
}
export declare class OrderTypesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteOrderTypeResponse?: shared.DeleteOrderTypeResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
