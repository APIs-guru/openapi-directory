import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlertcenterAlertsBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class AlertcenterAlertsBatchDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterAlertsBatchDeleteRequest extends SpeakeasyBase {
    queryParams: AlertcenterAlertsBatchDeleteQueryParams;
    request?: shared.BatchDeleteAlertsRequest;
    security: AlertcenterAlertsBatchDeleteSecurity;
}
export declare class AlertcenterAlertsBatchDeleteResponse extends SpeakeasyBase {
    batchDeleteAlertsResponse?: shared.BatchDeleteAlertsResponse;
    contentType: string;
    statusCode: number;
}
