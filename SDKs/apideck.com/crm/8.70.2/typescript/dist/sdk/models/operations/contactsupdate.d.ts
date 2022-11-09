import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ContactsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ContactsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ContactsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ContactsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ContactsUpdateRequest extends SpeakeasyBase {
    pathParams: ContactsUpdatePathParams;
    queryParams: ContactsUpdateQueryParams;
    headers: ContactsUpdateHeaders;
    request: shared.Contact;
    security: ContactsUpdateSecurity;
}
export declare class ContactsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateContactResponse?: shared.UpdateContactResponse;
}
