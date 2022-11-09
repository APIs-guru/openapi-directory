import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LeadsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.LeadsFilter;
    limit?: number;
    raw?: boolean;
    sort?: shared.LeadsSort;
}
export declare class LeadsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class LeadsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LeadsAllRequest extends SpeakeasyBase {
    queryParams: LeadsAllQueryParams;
    headers: LeadsAllHeaders;
    security: LeadsAllSecurity;
}
export declare class LeadsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getLeadsResponse?: shared.GetLeadsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
