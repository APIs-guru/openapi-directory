import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.ContactsFilter;
    limit?: number;
    raw?: boolean;
    sort?: shared.ContactsSort;
}
export declare class ContactsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ContactsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ContactsAllRequest extends SpeakeasyBase {
    queryParams: ContactsAllQueryParams;
    headers: ContactsAllHeaders;
    security: ContactsAllSecurity;
}
export declare class ContactsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getContactsResponse?: shared.GetContactsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
