import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsSearchAllAssignmentsPathParams;
    queryParams: BigqueryreservationProjectsLocationsSearchAllAssignmentsQueryParams;
    security: BigqueryreservationProjectsLocationsSearchAllAssignmentsSecurity;
}
export declare class BigqueryreservationProjectsLocationsSearchAllAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    searchAllAssignmentsResponse?: shared.SearchAllAssignmentsResponse;
    statusCode: number;
}
