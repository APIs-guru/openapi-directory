import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationsforuserDeletePathParams extends SpeakeasyBase {
    enterpriseId: string;
    managedConfigurationForUserId: string;
    userId: string;
}
export declare class AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationsforuserDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationsforuserDeleteRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationsforuserDeletePathParams;
    queryParams: AndroidenterpriseManagedconfigurationsforuserDeleteQueryParams;
    security: AndroidenterpriseManagedconfigurationsforuserDeleteSecurity;
}
export declare class AndroidenterpriseManagedconfigurationsforuserDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
