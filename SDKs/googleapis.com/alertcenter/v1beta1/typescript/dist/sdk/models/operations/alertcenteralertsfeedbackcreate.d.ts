import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlertcenterAlertsFeedbackCreatePathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class AlertcenterAlertsFeedbackCreateQueryParams extends SpeakeasyBase {
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
export declare class AlertcenterAlertsFeedbackCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterAlertsFeedbackCreateRequest extends SpeakeasyBase {
    pathParams: AlertcenterAlertsFeedbackCreatePathParams;
    queryParams: AlertcenterAlertsFeedbackCreateQueryParams;
    request?: shared.AlertFeedback;
    security: AlertcenterAlertsFeedbackCreateSecurity;
}
export declare class AlertcenterAlertsFeedbackCreateResponse extends SpeakeasyBase {
    alertFeedback?: shared.AlertFeedback;
    contentType: string;
    statusCode: number;
}
