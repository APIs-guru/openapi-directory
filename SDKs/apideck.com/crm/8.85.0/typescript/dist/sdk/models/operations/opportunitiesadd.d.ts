import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OpportunitiesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OpportunitiesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OpportunitiesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OpportunitiesAddRequest extends SpeakeasyBase {
    queryParams: OpportunitiesAddQueryParams;
    headers: OpportunitiesAddHeaders;
    request: shared.OpportunityInput;
    security: OpportunitiesAddSecurity;
}
export declare class OpportunitiesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createOpportunityResponse?: shared.CreateOpportunityResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
