import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationsfordeviceGetPathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    managedConfigurationForDeviceId: string;
    userId: string;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationsfordeviceGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationsfordeviceGetPathParams;
    queryParams: AndroidenterpriseManagedconfigurationsfordeviceGetQueryParams;
    security: AndroidenterpriseManagedconfigurationsfordeviceGetSecurity;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceGetResponse extends SpeakeasyBase {
    contentType: string;
    managedConfiguration?: shared.ManagedConfiguration;
    statusCode: number;
}
