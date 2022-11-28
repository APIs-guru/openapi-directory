import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreditNotesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CreditNotesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CreditNotesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreditNotesAddRequest extends SpeakeasyBase {
    queryParams: CreditNotesAddQueryParams;
    headers: CreditNotesAddHeaders;
    request: shared.CreditNoteInput;
    security: CreditNotesAddSecurity;
}
export declare class CreditNotesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createCreditNoteResponse?: shared.CreateCreditNoteResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
