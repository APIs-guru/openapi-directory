import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationsforuserGetPathParams extends SpeakeasyBase {
    enterpriseId: string;
    managedConfigurationForUserId: string;
    userId: string;
}
export declare class AndroidenterpriseManagedconfigurationsforuserGetQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationsforuserGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationsforuserGetRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationsforuserGetPathParams;
    queryParams: AndroidenterpriseManagedconfigurationsforuserGetQueryParams;
    security: AndroidenterpriseManagedconfigurationsforuserGetSecurity;
}
export declare class AndroidenterpriseManagedconfigurationsforuserGetResponse extends SpeakeasyBase {
    contentType: string;
    managedConfiguration?: shared.ManagedConfiguration;
    statusCode: number;
}
