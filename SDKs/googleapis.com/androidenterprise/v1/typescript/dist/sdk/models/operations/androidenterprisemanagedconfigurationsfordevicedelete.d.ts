import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    managedConfigurationForDeviceId: string;
    userId: string;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationsfordeviceDeletePathParams;
    queryParams: AndroidenterpriseManagedconfigurationsfordeviceDeleteQueryParams;
    security: AndroidenterpriseManagedconfigurationsfordeviceDeleteSecurity;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
