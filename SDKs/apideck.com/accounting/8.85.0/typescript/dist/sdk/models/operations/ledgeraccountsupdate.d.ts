import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LedgerAccountsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LedgerAccountsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LedgerAccountsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LedgerAccountsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LedgerAccountsUpdateRequest extends SpeakeasyBase {
    pathParams: LedgerAccountsUpdatePathParams;
    queryParams: LedgerAccountsUpdateQueryParams;
    headers: LedgerAccountsUpdateHeaders;
    request: Map<string, any>;
    security: LedgerAccountsUpdateSecurity;
}
export declare class LedgerAccountsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateLedgerAccountResponse?: shared.UpdateLedgerAccountResponse;
}
