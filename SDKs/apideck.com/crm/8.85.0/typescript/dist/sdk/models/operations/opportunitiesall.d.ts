import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OpportunitiesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.OpportunitiesFilter;
    limit?: number;
    raw?: boolean;
    sort?: shared.OpportunitiesSort;
}
export declare class OpportunitiesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class OpportunitiesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OpportunitiesAllRequest extends SpeakeasyBase {
    queryParams: OpportunitiesAllQueryParams;
    headers: OpportunitiesAllHeaders;
    security: OpportunitiesAllSecurity;
}
export declare class OpportunitiesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getOpportunitiesResponse?: shared.GetOpportunitiesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
