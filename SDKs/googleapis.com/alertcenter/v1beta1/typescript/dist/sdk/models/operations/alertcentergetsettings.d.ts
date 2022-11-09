import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AlertcenterGetSettingsQueryParams extends SpeakeasyBase {
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
export declare class AlertcenterGetSettingsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AlertcenterGetSettingsRequest extends SpeakeasyBase {
    queryParams: AlertcenterGetSettingsQueryParams;
    security: AlertcenterGetSettingsSecurity;
}
export declare class AlertcenterGetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    settings?: shared.Settings;
    statusCode: number;
}
