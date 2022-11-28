import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreditNotesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CreditNotesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CreditNotesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CreditNotesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreditNotesDeleteRequest extends SpeakeasyBase {
    pathParams: CreditNotesDeletePathParams;
    queryParams: CreditNotesDeleteQueryParams;
    headers: CreditNotesDeleteHeaders;
    security: CreditNotesDeleteSecurity;
}
export declare class CreditNotesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteCreditNoteResponse?: shared.DeleteCreditNoteResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
