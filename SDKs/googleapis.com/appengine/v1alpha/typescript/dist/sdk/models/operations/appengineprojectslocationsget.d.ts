import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineProjectsLocationsGetPathParams extends SpeakeasyBase {
    locationsId: string;
    projectsId: string;
}
export declare class AppengineProjectsLocationsGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineProjectsLocationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsGetSecurity extends SpeakeasyBase {
    option1?: AppengineProjectsLocationsGetSecurityOption1;
    option2?: AppengineProjectsLocationsGetSecurityOption2;
    option3?: AppengineProjectsLocationsGetSecurityOption3;
}
export declare class AppengineProjectsLocationsGetRequest extends SpeakeasyBase {
    pathParams: AppengineProjectsLocationsGetPathParams;
    queryParams: AppengineProjectsLocationsGetQueryParams;
    security: AppengineProjectsLocationsGetSecurity;
}
export declare class AppengineProjectsLocationsGetResponse extends SpeakeasyBase {
    contentType: string;
    location?: shared.Location;
    statusCode: number;
}
