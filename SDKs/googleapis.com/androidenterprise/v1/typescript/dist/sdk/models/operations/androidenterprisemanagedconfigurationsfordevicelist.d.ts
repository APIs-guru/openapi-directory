import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationsfordeviceListPathParams extends SpeakeasyBase {
    deviceId: string;
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationsfordeviceListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationsfordeviceListPathParams;
    queryParams: AndroidenterpriseManagedconfigurationsfordeviceListQueryParams;
    security: AndroidenterpriseManagedconfigurationsfordeviceListSecurity;
}
export declare class AndroidenterpriseManagedconfigurationsfordeviceListResponse extends SpeakeasyBase {
    contentType: string;
    managedConfigurationsForDeviceListResponse?: shared.ManagedConfigurationsForDeviceListResponse;
    statusCode: number;
}
