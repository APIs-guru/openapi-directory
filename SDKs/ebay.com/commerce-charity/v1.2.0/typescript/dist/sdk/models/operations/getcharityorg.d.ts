import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCharityOrgPathParams extends SpeakeasyBase {
    charityOrgId: string;
}
export declare class GetCharityOrgHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId: string;
}
export declare class GetCharityOrgSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetCharityOrgRequest extends SpeakeasyBase {
    pathParams: GetCharityOrgPathParams;
    headers: GetCharityOrgHeaders;
    security: GetCharityOrgSecurity;
}
export declare class GetCharityOrgResponse extends SpeakeasyBase {
    charityOrg?: shared.CharityOrg;
    contentType: string;
    statusCode: number;
}
