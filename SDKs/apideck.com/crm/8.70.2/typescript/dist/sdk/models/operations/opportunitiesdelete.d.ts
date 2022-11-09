import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OpportunitiesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OpportunitiesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OpportunitiesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OpportunitiesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OpportunitiesDeleteRequest extends SpeakeasyBase {
    pathParams: OpportunitiesDeletePathParams;
    queryParams: OpportunitiesDeleteQueryParams;
    headers: OpportunitiesDeleteHeaders;
    security: OpportunitiesDeleteSecurity;
}
export declare class OpportunitiesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteOpportunityResponse?: shared.DeleteOpportunityResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
