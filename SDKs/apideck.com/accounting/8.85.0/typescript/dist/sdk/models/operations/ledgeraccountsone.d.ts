import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LedgerAccountsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LedgerAccountsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LedgerAccountsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LedgerAccountsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LedgerAccountsOneRequest extends SpeakeasyBase {
    pathParams: LedgerAccountsOnePathParams;
    queryParams: LedgerAccountsOneQueryParams;
    headers: LedgerAccountsOneHeaders;
    security: LedgerAccountsOneSecurity;
}
export declare class LedgerAccountsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getLedgerAccountResponse?: shared.GetLedgerAccountResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
