import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCharityOrgByLegacyIdQueryParams extends SpeakeasyBase {
    legacyCharityOrgId: string;
}
export declare class GetCharityOrgByLegacyIdHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class GetCharityOrgByLegacyIdSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCharityOrgByLegacyIdRequest extends SpeakeasyBase {
    queryParams: GetCharityOrgByLegacyIdQueryParams;
    headers: GetCharityOrgByLegacyIdHeaders;
    security: GetCharityOrgByLegacyIdSecurity;
}
export declare class GetCharityOrgByLegacyIdResponse extends SpeakeasyBase {
    charityOrg?: shared.CharityOrg;
    contentType: string;
    statusCode: number;
}
