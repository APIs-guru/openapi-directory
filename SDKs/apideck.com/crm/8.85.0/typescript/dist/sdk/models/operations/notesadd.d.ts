import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class NotesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class NotesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class NotesAddRequest extends SpeakeasyBase {
    queryParams: NotesAddQueryParams;
    headers: NotesAddHeaders;
    request: shared.NoteInput;
    security: NotesAddSecurity;
}
export declare class NotesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createNoteResponse?: shared.CreateNoteResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
