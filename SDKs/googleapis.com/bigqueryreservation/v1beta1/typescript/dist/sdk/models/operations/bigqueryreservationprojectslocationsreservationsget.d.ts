import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsReservationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsGetQueryParams extends SpeakeasyBase {
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
export declare class BigqueryreservationProjectsLocationsReservationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsGetSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsReservationsGetSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsReservationsGetSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsReservationsGetRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsReservationsGetPathParams;
    queryParams: BigqueryreservationProjectsLocationsReservationsGetQueryParams;
    security: BigqueryreservationProjectsLocationsReservationsGetSecurity;
}
export declare class BigqueryreservationProjectsLocationsReservationsGetResponse extends SpeakeasyBase {
    contentType: string;
    reservation?: shared.Reservation;
    statusCode: number;
}
