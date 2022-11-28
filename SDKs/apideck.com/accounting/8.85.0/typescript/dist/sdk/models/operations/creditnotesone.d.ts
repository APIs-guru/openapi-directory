import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreditNotesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CreditNotesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CreditNotesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CreditNotesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreditNotesOneRequest extends SpeakeasyBase {
    pathParams: CreditNotesOnePathParams;
    queryParams: CreditNotesOneQueryParams;
    headers: CreditNotesOneHeaders;
    security: CreditNotesOneSecurity;
}
export declare class CreditNotesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getCreditNoteResponse?: shared.GetCreditNoteResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
