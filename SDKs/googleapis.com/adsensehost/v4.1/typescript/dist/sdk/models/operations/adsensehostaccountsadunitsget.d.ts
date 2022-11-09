import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsAdunitsGetPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
    adUnitId: string;
}
export declare class AdsensehostAccountsAdunitsGetQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsAdunitsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsAdunitsGetRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsAdunitsGetPathParams;
    queryParams: AdsensehostAccountsAdunitsGetQueryParams;
    security: AdsensehostAccountsAdunitsGetSecurity;
}
export declare class AdsensehostAccountsAdunitsGetResponse extends SpeakeasyBase {
    adUnit?: shared.AdUnit;
    contentType: string;
    statusCode: number;
}
