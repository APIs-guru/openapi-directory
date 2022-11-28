import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    assignmentId?: string;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsReservationsAssignmentsCreatePathParams;
    queryParams: BigqueryreservationProjectsLocationsReservationsAssignmentsCreateQueryParams;
    request?: shared.AssignmentInput;
    security: BigqueryreservationProjectsLocationsReservationsAssignmentsCreateSecurity;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsCreateResponse extends SpeakeasyBase {
    assignment?: shared.Assignment;
    contentType: string;
    statusCode: number;
}
