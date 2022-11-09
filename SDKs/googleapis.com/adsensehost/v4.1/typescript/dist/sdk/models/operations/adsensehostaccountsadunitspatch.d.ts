import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsAdunitsPatchPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsensehostAccountsAdunitsPatchQueryParams extends SpeakeasyBase {
    adUnitId: string;
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsAdunitsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsAdunitsPatchRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsAdunitsPatchPathParams;
    queryParams: AdsensehostAccountsAdunitsPatchQueryParams;
    request?: shared.AdUnit;
    security: AdsensehostAccountsAdunitsPatchSecurity;
}
export declare class AdsensehostAccountsAdunitsPatchResponse extends SpeakeasyBase {
    adUnit?: shared.AdUnit;
    contentType: string;
    statusCode: number;
}
