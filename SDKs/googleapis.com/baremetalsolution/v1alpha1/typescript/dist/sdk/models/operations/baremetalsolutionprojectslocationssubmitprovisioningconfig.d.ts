import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams extends SpeakeasyBase {
    location: string;
    project: string;
}
export declare class BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsSubmitProvisioningConfigRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigPathParams;
    queryParams: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigQueryParams;
    request?: shared.SubmitProvisioningConfigRequest;
    security: BaremetalsolutionProjectsLocationsSubmitProvisioningConfigSecurity;
}
export declare class BaremetalsolutionProjectsLocationsSubmitProvisioningConfigResponse extends SpeakeasyBase {
    contentType: string;
    provisioningConfig?: shared.ProvisioningConfig;
    statusCode: number;
}
