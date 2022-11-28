import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsReservationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryreservationProjectsLocationsReservationsListQueryParams extends SpeakeasyBase {
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
export declare class BigqueryreservationProjectsLocationsReservationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsReservationsListSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsReservationsListSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsReservationsListSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsReservationsListRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsReservationsListPathParams;
    queryParams: BigqueryreservationProjectsLocationsReservationsListQueryParams;
    security: BigqueryreservationProjectsLocationsReservationsListSecurity;
}
export declare class BigqueryreservationProjectsLocationsReservationsListResponse extends SpeakeasyBase {
    contentType: string;
    listReservationsResponse?: shared.ListReservationsResponse;
    statusCode: number;
}
