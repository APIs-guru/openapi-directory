import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsSearchAssignmentsPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams extends SpeakeasyBase {
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
export declare class BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsSearchAssignmentsSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsSearchAssignmentsSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsSearchAssignmentsRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsSearchAssignmentsPathParams;
    queryParams: BigqueryreservationProjectsLocationsSearchAssignmentsQueryParams;
    security: BigqueryreservationProjectsLocationsSearchAssignmentsSecurity;
}
export declare class BigqueryreservationProjectsLocationsSearchAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    searchAssignmentsResponse?: shared.SearchAssignmentsResponse;
    statusCode: number;
}
