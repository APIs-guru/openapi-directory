import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsReservationsAssignmentsPatchPathParams;
    queryParams: BigqueryreservationProjectsLocationsReservationsAssignmentsPatchQueryParams;
    request?: shared.AssignmentInput;
    security: BigqueryreservationProjectsLocationsReservationsAssignmentsPatchSecurity;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsPatchResponse extends SpeakeasyBase {
    assignment?: shared.Assignment;
    contentType: string;
    statusCode: number;
}
