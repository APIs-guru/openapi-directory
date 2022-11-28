import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum {
    WaitForNotifications = "waitForNotifications",
    ReturnImmediately = "returnImmediately"
}
export declare class AndroidenterpriseEnterprisesPullNotificationSetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestMode?: AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEnterprisesPullNotificationSetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesPullNotificationSetRequest extends SpeakeasyBase {
    queryParams: AndroidenterpriseEnterprisesPullNotificationSetQueryParams;
    security: AndroidenterpriseEnterprisesPullNotificationSetSecurity;
}
export declare class AndroidenterpriseEnterprisesPullNotificationSetResponse extends SpeakeasyBase {
    contentType: string;
    notificationSet?: shared.NotificationSet;
    statusCode: number;
}
