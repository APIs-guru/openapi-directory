import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class NotesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class NotesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class NotesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class NotesDeleteRequest extends SpeakeasyBase {
    pathParams: NotesDeletePathParams;
    queryParams: NotesDeleteQueryParams;
    headers: NotesDeleteHeaders;
    security: NotesDeleteSecurity;
}
export declare class NotesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteNoteResponse?: shared.DeleteNoteResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
