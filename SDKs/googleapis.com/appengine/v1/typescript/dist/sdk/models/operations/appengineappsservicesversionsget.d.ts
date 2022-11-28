import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsServicesVersionsGetPathParams extends SpeakeasyBase {
    appsId: string;
    servicesId: string;
    versionsId: string;
}
export declare enum AppengineAppsServicesVersionsGetViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
export declare class AppengineAppsServicesVersionsGetQueryParams extends SpeakeasyBase {
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
    view?: AppengineAppsServicesVersionsGetViewEnum;
}
export declare class AppengineAppsServicesVersionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsServicesVersionsGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsServicesVersionsGetSecurityOption1;
    option2?: AppengineAppsServicesVersionsGetSecurityOption2;
    option3?: AppengineAppsServicesVersionsGetSecurityOption3;
}
export declare class AppengineAppsServicesVersionsGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsServicesVersionsGetPathParams;
    queryParams: AppengineAppsServicesVersionsGetQueryParams;
    security: AppengineAppsServicesVersionsGetSecurity;
}
export declare class AppengineAppsServicesVersionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    version?: shared.Version;
}
