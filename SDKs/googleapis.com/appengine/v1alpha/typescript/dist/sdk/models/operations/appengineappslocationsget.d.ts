import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineAppsLocationsGetPathParams extends SpeakeasyBase {
    appsId: string;
    locationsId: string;
}
export declare class AppengineAppsLocationsGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineAppsLocationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsLocationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsLocationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineAppsLocationsGetSecurity extends SpeakeasyBase {
    option1?: AppengineAppsLocationsGetSecurityOption1;
    option2?: AppengineAppsLocationsGetSecurityOption2;
    option3?: AppengineAppsLocationsGetSecurityOption3;
}
export declare class AppengineAppsLocationsGetRequest extends SpeakeasyBase {
    pathParams: AppengineAppsLocationsGetPathParams;
    queryParams: AppengineAppsLocationsGetQueryParams;
    security: AppengineAppsLocationsGetSecurity;
}
export declare class AppengineAppsLocationsGetResponse extends SpeakeasyBase {
    contentType: string;
    location?: shared.Location;
    statusCode: number;
}
