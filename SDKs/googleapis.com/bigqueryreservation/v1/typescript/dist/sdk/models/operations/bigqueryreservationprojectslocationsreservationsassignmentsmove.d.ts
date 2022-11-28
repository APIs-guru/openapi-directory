import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams extends SpeakeasyBase {
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
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsMoveRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsReservationsAssignmentsMovePathParams;
    queryParams: BigqueryreservationProjectsLocationsReservationsAssignmentsMoveQueryParams;
    request?: shared.MoveAssignmentRequest;
    security: BigqueryreservationProjectsLocationsReservationsAssignmentsMoveSecurity;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsMoveResponse extends SpeakeasyBase {
    assignment?: shared.Assignment;
    contentType: string;
    statusCode: number;
}
