import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams extends SpeakeasyBase {
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
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams;
    queryParams: BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams;
    security: BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listCapacityCommitmentsResponse?: shared.ListCapacityCommitmentsResponse;
    statusCode: number;
}
