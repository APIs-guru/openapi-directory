import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ContactsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ContactsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ContactsAddRequest extends SpeakeasyBase {
    queryParams: ContactsAddQueryParams;
    headers: ContactsAddHeaders;
    request: shared.ContactInput;
    security: ContactsAddSecurity;
}
export declare class ContactsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createContactResponse?: shared.CreateContactResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
