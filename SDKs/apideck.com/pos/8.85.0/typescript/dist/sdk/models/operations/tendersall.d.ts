import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TendersAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class TendersAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TendersAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TendersAllRequest extends SpeakeasyBase {
    queryParams: TendersAllQueryParams;
    headers: TendersAllHeaders;
    security: TendersAllSecurity;
}
export declare class TendersAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getTendersResponse?: shared.GetTendersResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
