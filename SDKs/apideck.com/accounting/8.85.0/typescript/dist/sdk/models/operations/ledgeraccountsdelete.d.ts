import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LedgerAccountsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LedgerAccountsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LedgerAccountsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LedgerAccountsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LedgerAccountsDeleteRequest extends SpeakeasyBase {
    pathParams: LedgerAccountsDeletePathParams;
    queryParams: LedgerAccountsDeleteQueryParams;
    headers: LedgerAccountsDeleteHeaders;
    security: LedgerAccountsDeleteSecurity;
}
export declare class LedgerAccountsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteLedgerAccountResponse?: shared.DeleteLedgerAccountResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
