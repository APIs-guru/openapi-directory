import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AlertcenterAlertsDeletePathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class AlertcenterAlertsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AlertcenterAlertsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterAlertsDeleteRequest extends SpeakeasyBase {
    pathParams: AlertcenterAlertsDeletePathParams;
    queryParams: AlertcenterAlertsDeleteQueryParams;
    security: AlertcenterAlertsDeleteSecurity;
}
export declare class AlertcenterAlertsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
