import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OpportunitiesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OpportunitiesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OpportunitiesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OpportunitiesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OpportunitiesUpdateRequest extends SpeakeasyBase {
    pathParams: OpportunitiesUpdatePathParams;
    queryParams: OpportunitiesUpdateQueryParams;
    headers: OpportunitiesUpdateHeaders;
    request: shared.Opportunity;
    security: OpportunitiesUpdateSecurity;
}
export declare class OpportunitiesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateOpportunityResponse?: shared.UpdateOpportunityResponse;
}
