import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProfitAndLossOneQueryParams extends SpeakeasyBase {
    filter?: shared.ProfitAndLossFilter;
    raw?: boolean;
}
export declare class ProfitAndLossOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ProfitAndLossOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ProfitAndLossOneRequest extends SpeakeasyBase {
    queryParams: ProfitAndLossOneQueryParams;
    headers: ProfitAndLossOneHeaders;
    security: ProfitAndLossOneSecurity;
}
export declare class ProfitAndLossOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getProfitAndLossResponse?: shared.GetProfitAndLossResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
