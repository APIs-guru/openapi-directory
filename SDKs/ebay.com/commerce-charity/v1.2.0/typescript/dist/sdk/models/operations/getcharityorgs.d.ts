import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCharityOrgsQueryParams extends SpeakeasyBase {
    limit?: string;
    offset?: string;
    q?: string;
    registrationIds?: string;
}
export declare class GetCharityOrgsHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class GetCharityOrgsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCharityOrgsRequest extends SpeakeasyBase {
    queryParams: GetCharityOrgsQueryParams;
    headers: GetCharityOrgsHeaders;
    security: GetCharityOrgsSecurity;
}
export declare class GetCharityOrgsResponse extends SpeakeasyBase {
    charitySearchResponse?: shared.CharitySearchResponse;
    contentType: string;
    statusCode: number;
}
