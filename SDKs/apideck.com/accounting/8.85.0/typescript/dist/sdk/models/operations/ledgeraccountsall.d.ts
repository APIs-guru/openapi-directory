import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LedgerAccountsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class LedgerAccountsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LedgerAccountsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LedgerAccountsAllRequest extends SpeakeasyBase {
    queryParams: LedgerAccountsAllQueryParams;
    headers: LedgerAccountsAllHeaders;
    security: LedgerAccountsAllSecurity;
}
export declare class LedgerAccountsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getLedgerAccountsResponse?: shared.GetLedgerAccountsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
