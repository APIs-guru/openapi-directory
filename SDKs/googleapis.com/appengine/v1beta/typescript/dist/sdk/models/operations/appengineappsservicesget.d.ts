import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesGetPathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
}
export declare class AppengineAppsServicesGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsServicesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesGetSecurityOption1;
    option2?: AppengineAppsServicesGetSecurityOption2;
    option3?: AppengineAppsServicesGetSecurityOption3;
}
export declare class AppengineAppsServicesGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesGetPathParams;
    queryParams: AppengineAppsServicesGetQueryParams;
    security: AppengineAppsServicesGetSecurity;
}
export declare class AppengineAppsServicesGetResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}
