import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams extends SpeakeasyBase {
    location: string;
}
export declare class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchPathParams;
    queryParams: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchQueryParams;
    security: BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchSecurity;
}
export declare class BaremetalsolutionProjectsLocationsInstanceProvisioningSettingsFetchResponse extends SpeakeasyBase {
    contentType: string;
    fetchInstanceProvisioningSettingsResponse?: shared.FetchInstanceProvisioningSettingsResponse;
    statusCode: number;
}
