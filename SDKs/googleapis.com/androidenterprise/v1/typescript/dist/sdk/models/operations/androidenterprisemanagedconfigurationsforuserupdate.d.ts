import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationsforuserUpdatePathParams extends SpeakeasyBase {
    enterpriseId: string;
    managedConfigurationForUserId: string;
    userId: string;
}
export declare class AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationsforuserUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationsforuserUpdateRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationsforuserUpdatePathParams;
    queryParams: AndroidenterpriseManagedconfigurationsforuserUpdateQueryParams;
    request?: shared.ManagedConfiguration;
    security: AndroidenterpriseManagedconfigurationsforuserUpdateSecurity;
}
export declare class AndroidenterpriseManagedconfigurationsforuserUpdateResponse extends SpeakeasyBase {
    contentType: string;
    managedConfiguration?: shared.ManagedConfiguration;
    statusCode: number;
}
