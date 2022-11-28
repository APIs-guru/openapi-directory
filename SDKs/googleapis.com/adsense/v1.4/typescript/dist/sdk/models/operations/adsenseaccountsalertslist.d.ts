import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAlertsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class AdsenseAccountsAlertsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsAlertsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAlertsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAlertsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAccountsAlertsListSecurityOption1;
    option2?: AdsenseAccountsAlertsListSecurityOption2;
}
export declare class AdsenseAccountsAlertsListRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAlertsListPathParams;
    queryParams: AdsenseAccountsAlertsListQueryParams;
    security: AdsenseAccountsAlertsListSecurity;
}
export declare class AdsenseAccountsAlertsListResponse extends SpeakeasyBase {
    alerts?: shared.Alerts;
    contentType: string;
    statusCode: number;
}
