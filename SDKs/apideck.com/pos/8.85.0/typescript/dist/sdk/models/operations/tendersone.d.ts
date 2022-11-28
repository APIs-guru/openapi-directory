import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TendersOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TendersOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TendersOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TendersOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TendersOneRequest extends SpeakeasyBase {
    pathParams: TendersOnePathParams;
    queryParams: TendersOneQueryParams;
    headers: TendersOneHeaders;
    security: TendersOneSecurity;
}
export declare class TendersOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getTenderResponse?: shared.GetTenderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
