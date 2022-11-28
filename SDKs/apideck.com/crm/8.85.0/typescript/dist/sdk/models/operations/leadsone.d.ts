import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LeadsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LeadsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LeadsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LeadsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LeadsOneRequest extends SpeakeasyBase {
    pathParams: LeadsOnePathParams;
    queryParams: LeadsOneQueryParams;
    headers: LeadsOneHeaders;
    security: LeadsOneSecurity;
}
export declare class LeadsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getLeadResponse?: shared.GetLeadResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
