import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class NotesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class NotesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class NotesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class NotesUpdateRequest extends SpeakeasyBase {
    pathParams: NotesUpdatePathParams;
    queryParams: NotesUpdateQueryParams;
    headers: NotesUpdateHeaders;
    request: shared.Note;
    security: NotesUpdateSecurity;
}
export declare class NotesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateNoteResponse?: shared.UpdateNoteResponse;
}
