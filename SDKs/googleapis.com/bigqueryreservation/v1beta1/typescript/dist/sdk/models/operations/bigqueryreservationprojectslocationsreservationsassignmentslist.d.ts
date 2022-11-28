import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams extends SpeakeasyBase {
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
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsListRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsReservationsAssignmentsListPathParams;
    queryParams: BigqueryreservationProjectsLocationsReservationsAssignmentsListQueryParams;
    security: BigqueryreservationProjectsLocationsReservationsAssignmentsListSecurity;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listAssignmentsResponse?: shared.ListAssignmentsResponse;
    statusCode: number;
}
