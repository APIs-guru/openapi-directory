import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsAdunitsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsensehostAccountsAdunitsUpdateQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsAdunitsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsAdunitsUpdateRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsAdunitsUpdatePathParams;
    queryParams: AdsensehostAccountsAdunitsUpdateQueryParams;
    request?: shared.AdUnit;
    security: AdsensehostAccountsAdunitsUpdateSecurity;
}
export declare class AdsensehostAccountsAdunitsUpdateResponse extends SpeakeasyBase {
    adUnit?: shared.AdUnit;
    contentType: string;
    statusCode: number;
}
