import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AlertcenterAlertsFeedbackListPathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class AlertcenterAlertsFeedbackListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    customerId?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AlertcenterAlertsFeedbackListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterAlertsFeedbackListRequest extends SpeakeasyBase {
    pathParams: AlertcenterAlertsFeedbackListPathParams;
    queryParams: AlertcenterAlertsFeedbackListQueryParams;
    security: AlertcenterAlertsFeedbackListSecurity;
}
export declare class AlertcenterAlertsFeedbackListResponse extends SpeakeasyBase {
    contentType: string;
    listAlertFeedbackResponse?: shared.ListAlertFeedbackResponse;
    statusCode: number;
}
