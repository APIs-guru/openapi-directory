import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CustomersDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomersDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CustomersDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CustomersDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CustomersDeleteRequest extends SpeakeasyBase {
    pathParams: CustomersDeletePathParams;
    queryParams: CustomersDeleteQueryParams;
    headers: CustomersDeleteHeaders;
    security: CustomersDeleteSecurity;
}
export declare class CustomersDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteCustomerSupportCustomerResponse?: shared.DeleteCustomerSupportCustomerResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
