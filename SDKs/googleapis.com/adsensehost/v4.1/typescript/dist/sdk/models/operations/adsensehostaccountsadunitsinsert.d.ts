import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdsensehostAccountsAdunitsInsertPathParams extends SpeakeasyBase {
    accountId: string;
    adClientId: string;
}
export declare class AdsensehostAccountsAdunitsInsertQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsensehostAccountsAdunitsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsensehostAccountsAdunitsInsertRequest extends SpeakeasyBase {
    pathParams: AdsensehostAccountsAdunitsInsertPathParams;
    queryParams: AdsensehostAccountsAdunitsInsertQueryParams;
    request?: shared.AdUnit;
    security: AdsensehostAccountsAdunitsInsertSecurity;
}
export declare class AdsensehostAccountsAdunitsInsertResponse extends SpeakeasyBase {
    adUnit?: shared.AdUnit;
    contentType: string;
    statusCode: number;
}
