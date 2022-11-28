import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    email?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsCreateRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsProvisioningConfigsCreatePathParams;
    queryParams: BaremetalsolutionProjectsLocationsProvisioningConfigsCreateQueryParams;
    request?: shared.ProvisioningConfigInput;
    security: BaremetalsolutionProjectsLocationsProvisioningConfigsCreateSecurity;
}
export declare class BaremetalsolutionProjectsLocationsProvisioningConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    provisioningConfig?: shared.ProvisioningConfig;
    statusCode: number;
}
