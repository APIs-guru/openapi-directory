import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineProjectsLocationsApplicationsGetPathParams extends SpeakeasyBase {
    applicationsId: string;
    locationsId: string;
    projectsId: string;
}
export declare class AppengineProjectsLocationsApplicationsGetQueryParams extends SpeakeasyBase {
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
export declare class AppengineProjectsLocationsApplicationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsApplicationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsApplicationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsApplicationsGetSecurity extends SpeakeasyBase {
    option1?: AppengineProjectsLocationsApplicationsGetSecurityOption1;
    option2?: AppengineProjectsLocationsApplicationsGetSecurityOption2;
    option3?: AppengineProjectsLocationsApplicationsGetSecurityOption3;
}
export declare class AppengineProjectsLocationsApplicationsGetRequest extends SpeakeasyBase {
    pathParams: AppengineProjectsLocationsApplicationsGetPathParams;
    queryParams: AppengineProjectsLocationsApplicationsGetQueryParams;
    security: AppengineProjectsLocationsApplicationsGetSecurity;
}
export declare class AppengineProjectsLocationsApplicationsGetResponse extends SpeakeasyBase {
    application?: shared.Application;
    contentType: string;
    statusCode: number;
}
