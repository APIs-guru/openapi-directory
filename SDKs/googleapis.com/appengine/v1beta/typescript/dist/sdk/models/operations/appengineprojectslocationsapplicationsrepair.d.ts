import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppengineProjectsLocationsApplicationsRepairPathParams extends SpeakeasyBase {
    applicationsId: string;
    locationsId: string;
    projectsId: string;
}
export declare class AppengineProjectsLocationsApplicationsRepairQueryParams extends SpeakeasyBase {
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
export declare class AppengineProjectsLocationsApplicationsRepairSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsApplicationsRepairRequest extends SpeakeasyBase {
    pathParams: AppengineProjectsLocationsApplicationsRepairPathParams;
    queryParams: AppengineProjectsLocationsApplicationsRepairQueryParams;
    request?: Map<string, any>;
    security: AppengineProjectsLocationsApplicationsRepairSecurity;
}
export declare class AppengineProjectsLocationsApplicationsRepairResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
