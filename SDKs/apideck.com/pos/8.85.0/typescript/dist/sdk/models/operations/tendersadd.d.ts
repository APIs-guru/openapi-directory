import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TendersAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TendersAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TendersAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TendersAddRequest extends SpeakeasyBase {
    queryParams: TendersAddQueryParams;
    headers: TendersAddHeaders;
    request: shared.TenderInput;
    security: TendersAddSecurity;
}
export declare class TendersAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createTenderResponse?: shared.CreateTenderResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
