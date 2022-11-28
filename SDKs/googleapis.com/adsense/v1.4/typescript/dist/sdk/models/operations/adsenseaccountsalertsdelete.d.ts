import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAccountsAlertsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    alertId: string;
}
export declare class AdsenseAccountsAlertsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAccountsAlertsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAccountsAlertsDeleteRequest extends SpeakeasyBase {
    pathParams: AdsenseAccountsAlertsDeletePathParams;
    queryParams: AdsenseAccountsAlertsDeleteQueryParams;
    security: AdsenseAccountsAlertsDeleteSecurity;
}
export declare class AdsenseAccountsAlertsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
