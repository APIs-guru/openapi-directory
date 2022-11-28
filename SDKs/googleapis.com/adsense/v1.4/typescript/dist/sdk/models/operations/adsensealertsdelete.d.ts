import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AdsenseAlertsDeletePathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class AdsenseAlertsDeleteQueryParams extends SpeakeasyBase {
    alt?: shared.AltEnum;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    userIp?: string;
}
export declare class AdsenseAlertsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AdsenseAlertsDeleteRequest extends SpeakeasyBase {
    pathParams: AdsenseAlertsDeletePathParams;
    queryParams: AdsenseAlertsDeleteQueryParams;
    security: AdsenseAlertsDeleteSecurity;
}
export declare class AdsenseAlertsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
