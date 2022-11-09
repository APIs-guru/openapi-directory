import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AlertcenterAlertsBatchUndeleteQueryParams extends SpeakeasyBase {
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
export declare class AlertcenterAlertsBatchUndeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterAlertsBatchUndeleteRequest extends SpeakeasyBase {
    queryParams: AlertcenterAlertsBatchUndeleteQueryParams;
    request?: shared.BatchUndeleteAlertsRequest;
    security: AlertcenterAlertsBatchUndeleteSecurity;
}
export declare class AlertcenterAlertsBatchUndeleteResponse extends SpeakeasyBase {
    batchUndeleteAlertsResponse?: shared.BatchUndeleteAlertsResponse;
    contentType: string;
    statusCode: number;
}
