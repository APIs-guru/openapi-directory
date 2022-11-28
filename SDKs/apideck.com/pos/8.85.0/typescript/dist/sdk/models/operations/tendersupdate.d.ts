import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TendersUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TendersUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TendersUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TendersUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TendersUpdateRequest extends SpeakeasyBase {
    pathParams: TendersUpdatePathParams;
    queryParams: TendersUpdateQueryParams;
    headers: TendersUpdateHeaders;
    request: shared.TenderInput;
    security: TendersUpdateSecurity;
}
export declare class TendersUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateTenderResponse?: shared.UpdateTenderResponse;
}
