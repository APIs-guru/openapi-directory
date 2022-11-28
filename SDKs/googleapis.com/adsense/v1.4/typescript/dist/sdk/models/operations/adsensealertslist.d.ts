import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAlertsListQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAlertsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAlertsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAlertsListSecurity extends SpeakeasyBase {
    option1?: AdsenseAlertsListSecurityOption1;
    option2?: AdsenseAlertsListSecurityOption2;
}
export declare class AdsenseAlertsListRequest extends SpeakeasyBase {
    queryParams: AdsenseAlertsListQueryParams;
    security: AdsenseAlertsListSecurity;
}
export declare class AdsenseAlertsListResponse extends SpeakeasyBase {
    alerts?: shared.Alerts;
    contentType: string;
    statusCode: number;
}
