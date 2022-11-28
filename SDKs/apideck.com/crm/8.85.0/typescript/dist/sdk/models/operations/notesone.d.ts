import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class NotesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class NotesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class NotesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class NotesOneRequest extends SpeakeasyBase {
    pathParams: NotesOnePathParams;
    queryParams: NotesOneQueryParams;
    headers: NotesOneHeaders;
    security: NotesOneSecurity;
}
export declare class NotesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getNoteResponse?: shared.GetNoteResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
