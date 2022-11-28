import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseEnterprisesSendTestPushNotificationPathParams extends SpeakeasyBase {
    enterpriseId: string;
}
export declare class AndroidenterpriseEnterprisesSendTestPushNotificationQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AndroidenterpriseEnterprisesSendTestPushNotificationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseEnterprisesSendTestPushNotificationRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseEnterprisesSendTestPushNotificationPathParams;
    queryParams: AndroidenterpriseEnterprisesSendTestPushNotificationQueryParams;
    security: AndroidenterpriseEnterprisesSendTestPushNotificationSecurity;
}
export declare class AndroidenterpriseEnterprisesSendTestPushNotificationResponse extends SpeakeasyBase {
    contentType: string;
    enterprisesSendTestPushNotificationResponse?: shared.EnterprisesSendTestPushNotificationResponse;
    statusCode: number;
}
