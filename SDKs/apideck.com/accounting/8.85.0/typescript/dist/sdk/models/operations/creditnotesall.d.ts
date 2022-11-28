import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreditNotesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class CreditNotesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CreditNotesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CreditNotesAllRequest extends SpeakeasyBase {
    queryParams: CreditNotesAllQueryParams;
    headers: CreditNotesAllHeaders;
    security: CreditNotesAllSecurity;
}
export declare class CreditNotesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getCreditNotesResponse?: shared.GetCreditNotesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
