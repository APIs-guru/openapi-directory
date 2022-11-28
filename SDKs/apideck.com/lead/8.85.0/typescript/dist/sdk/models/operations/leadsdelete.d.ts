import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LeadsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LeadsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LeadsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LeadsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LeadsDeleteRequest extends SpeakeasyBase {
    pathParams: LeadsDeletePathParams;
    queryParams: LeadsDeleteQueryParams;
    headers: LeadsDeleteHeaders;
    security: LeadsDeleteSecurity;
}
export declare class LeadsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteLeadResponse?: shared.DeleteLeadResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
