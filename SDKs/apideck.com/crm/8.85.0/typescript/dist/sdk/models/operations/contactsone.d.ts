import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ContactsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ContactsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ContactsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ContactsOneRequest extends SpeakeasyBase {
    pathParams: ContactsOnePathParams;
    queryParams: ContactsOneQueryParams;
    headers: ContactsOneHeaders;
    security: ContactsOneSecurity;
}
export declare class ContactsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getContactResponse?: shared.GetContactResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
