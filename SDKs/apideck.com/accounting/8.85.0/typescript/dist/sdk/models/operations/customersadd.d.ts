import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomersAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CustomersAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CustomersAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CustomersAddRequest extends SpeakeasyBase {
    queryParams: CustomersAddQueryParams;
    headers: CustomersAddHeaders;
    request: shared.AccountingCustomerInput;
    security: CustomersAddSecurity;
}
export declare class CustomersAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createCustomerResponse?: shared.CreateCustomerResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
