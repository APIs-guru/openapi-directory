import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BalanceSheetOneQueryParams extends SpeakeasyBase {
    filter?: shared.BalanceSheetFilter;
    passThrough?: Map<string, any>;
    raw?: boolean;
}
export declare class BalanceSheetOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class BalanceSheetOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class BalanceSheetOneRequest extends SpeakeasyBase {
    queryParams: BalanceSheetOneQueryParams;
    headers: BalanceSheetOneHeaders;
    security: BalanceSheetOneSecurity;
}
export declare class BalanceSheetOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getBalanceSheetResponse?: shared.GetBalanceSheetResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
