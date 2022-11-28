import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlertcenterUpdateSettingsQueryParams extends SpeakeasyBase {
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
export declare class AlertcenterUpdateSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterUpdateSettingsRequest extends SpeakeasyBase {
    queryParams: AlertcenterUpdateSettingsQueryParams;
    request?: shared.Settings;
    security: AlertcenterUpdateSettingsSecurity;
}
export declare class AlertcenterUpdateSettingsResponse extends SpeakeasyBase {
    contentType: string;
    settings?: shared.Settings;
    statusCode: number;
}
