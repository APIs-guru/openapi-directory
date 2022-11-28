import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsAdunitsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
    adUnitId: string;
}
export declare class AdsensehostAccountsAdunitsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsAdunitsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsAdunitsDeleteRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsAdunitsDeletePathParams;
    queryParams: AdsensehostAccountsAdunitsDeleteQueryParams;
    security: AdsensehostAccountsAdunitsDeleteSecurity;
}
export declare class AdsensehostAccountsAdunitsDeleteResponse extends SpeakeasyBase {
    adUnit?: shared.AdUnit;
    contentType: string;
    statusCode: number;
}
