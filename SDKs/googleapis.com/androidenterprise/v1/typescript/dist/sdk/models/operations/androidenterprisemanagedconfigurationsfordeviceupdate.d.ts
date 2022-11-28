import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    managedConfigurationForDeviceId: string;
    userId: string;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationsfordeviceUpdatePathParams;
    queryParams: AndroidenterpriseManagedconfigurationsfordeviceUpdateQueryParams;
    request?: shared.ManagedConfiguration;
    security: AndroidenterpriseManagedconfigurationsfordeviceUpdateSecurity;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceUpdateResponse extends SpeakeasyBase {
    contentType: string;
    managedConfiguration?: shared.ManagedConfiguration;
    statusCode: number;
}
