import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LeadsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LeadsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class LeadsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LeadsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LeadsUpdateRequest extends SpeakeasyBase {
    pathParams: LeadsUpdatePathParams;
    queryParams: LeadsUpdateQueryParams;
    headers: LeadsUpdateHeaders;
    request: shared.LeadInput;
    security: LeadsUpdateSecurity;
}
export declare class LeadsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateLeadResponse?: shared.UpdateLeadResponse;
}
