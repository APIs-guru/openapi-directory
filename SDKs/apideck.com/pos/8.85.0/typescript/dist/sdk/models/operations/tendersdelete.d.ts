import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TendersDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TendersDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TendersDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TendersDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TendersDeleteRequest extends SpeakeasyBase {
    pathParams: TendersDeletePathParams;
    queryParams: TendersDeleteQueryParams;
    headers: TendersDeleteHeaders;
    security: TendersDeleteSecurity;
}
export declare class TendersDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteTenderResponse?: shared.DeleteTenderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
