import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ContactsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ContactsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ContactsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ContactsDeleteRequest extends SpeakeasyBase {
    pathParams: ContactsDeletePathParams;
    queryParams: ContactsDeleteQueryParams;
    headers: ContactsDeleteHeaders;
    security: ContactsDeleteSecurity;
}
export declare class ContactsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteContactResponse?: shared.DeleteContactResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
