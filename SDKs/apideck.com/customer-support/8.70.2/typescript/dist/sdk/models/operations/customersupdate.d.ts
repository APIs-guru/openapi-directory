import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CustomersUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CustomersUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CustomersUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CustomersUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CustomersUpdateRequest extends SpeakeasyBase {
    pathParams: CustomersUpdatePathParams;
    queryParams: CustomersUpdateQueryParams;
    headers: CustomersUpdateHeaders;
    request: shared.CustomerSupportCustomer;
    security: CustomersUpdateSecurity;
}
export declare class CustomersUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateCustomerSupportCustomerResponse?: shared.UpdateCustomerSupportCustomerResponse;
}
