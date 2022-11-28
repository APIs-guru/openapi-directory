import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomersOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CustomersOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CustomersOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CustomersOneRequest extends SpeakeasyBase {
    pathParams: CustomersOnePathParams;
    queryParams: CustomersOneQueryParams;
    headers: CustomersOneHeaders;
    security: CustomersOneSecurity;
}
export declare class CustomersOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getCustomerSupportCustomerResponse?: shared.GetCustomerSupportCustomerResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
