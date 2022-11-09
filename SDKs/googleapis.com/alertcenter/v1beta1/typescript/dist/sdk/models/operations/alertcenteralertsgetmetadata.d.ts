import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AlertcenterAlertsGetMetadataPathParams extends SpeakeasyBase {
    alertId: string;
}
export declare class AlertcenterAlertsGetMetadataQueryParams extends SpeakeasyBase {
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
export declare class AlertcenterAlertsGetMetadataSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterAlertsGetMetadataRequest extends SpeakeasyBase {
    pathParams: AlertcenterAlertsGetMetadataPathParams;
    queryParams: AlertcenterAlertsGetMetadataQueryParams;
    security: AlertcenterAlertsGetMetadataSecurity;
}
export declare class AlertcenterAlertsGetMetadataResponse extends SpeakeasyBase {
    alertMetadata?: shared.AlertMetadata;
    contentType: string;
    statusCode: number;
}
