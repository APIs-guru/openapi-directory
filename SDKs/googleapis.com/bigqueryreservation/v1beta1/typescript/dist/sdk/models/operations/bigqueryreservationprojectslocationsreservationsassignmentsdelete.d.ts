import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsReservationsAssignmentsDeletePathParams;
    queryParams: BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteQueryParams;
    security: BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteSecurity;
}
export declare class BigqueryreservationProjectsLocationsReservationsAssignmentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
