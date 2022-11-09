import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppengineProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    locationsId: string;
    projectsId: string;
}
export declare class AppengineProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AppengineProjectsLocationsOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsOperationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AppengineProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    option1?: AppengineProjectsLocationsOperationsListSecurityOption1;
    option2?: AppengineProjectsLocationsOperationsListSecurityOption2;
    option3?: AppengineProjectsLocationsOperationsListSecurityOption3;
}
export declare class AppengineProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: AppengineProjectsLocationsOperationsListPathParams;
    queryParams: AppengineProjectsLocationsOperationsListQueryParams;
    security: AppengineProjectsLocationsOperationsListSecurity;
}
export declare class AppengineProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
