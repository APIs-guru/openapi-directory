import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OpportunitiesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class OpportunitiesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class OpportunitiesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OpportunitiesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OpportunitiesOneRequest extends SpeakeasyBase {
    pathParams: OpportunitiesOnePathParams;
    queryParams: OpportunitiesOneQueryParams;
    headers: OpportunitiesOneHeaders;
    security: OpportunitiesOneSecurity;
}
export declare class OpportunitiesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getOpportunityResponse?: shared.GetOpportunityResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
