import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LedgerAccountsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LedgerAccountsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LedgerAccountsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LedgerAccountsAddRequest extends SpeakeasyBase {
    queryParams: LedgerAccountsAddQueryParams;
    headers: LedgerAccountsAddHeaders;
    request: Map<string, any>;
    security: LedgerAccountsAddSecurity;
}
export declare class LedgerAccountsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createLedgerAccountResponse?: shared.CreateLedgerAccountResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
