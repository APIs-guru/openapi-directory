import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AndroidenterpriseManagedconfigurationsforuserListPathParams extends SpeakeasyBase {
    enterpriseId: string;
    userId: string;
}
export declare class AndroidenterpriseManagedconfigurationsforuserListQueryParams extends SpeakeasyBase {
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
export declare class AndroidenterpriseManagedconfigurationsforuserListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AndroidenterpriseManagedconfigurationsforuserListRequest extends SpeakeasyBase {
    pathParams: AndroidenterpriseManagedconfigurationsforuserListPathParams;
    queryParams: AndroidenterpriseManagedconfigurationsforuserListQueryParams;
    security: AndroidenterpriseManagedconfigurationsforuserListSecurity;
}
export declare class AndroidenterpriseManagedconfigurationsforuserListResponse extends SpeakeasyBase {
    contentType: string;
    managedConfigurationsForUserListResponse?: shared.ManagedConfigurationsForUserListResponse;
    statusCode: number;
}
