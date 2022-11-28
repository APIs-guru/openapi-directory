import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreditNotesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CreditNotesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CreditNotesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CreditNotesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreditNotesUpdateRequest extends SpeakeasyBase {
    pathParams: CreditNotesUpdatePathParams;
    queryParams: CreditNotesUpdateQueryParams;
    headers: CreditNotesUpdateHeaders;
    request: shared.CreditNoteInput;
    security: CreditNotesUpdateSecurity;
}
export declare class CreditNotesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateCreditNoteResponse?: shared.UpdateCreditNoteResponse;
}
