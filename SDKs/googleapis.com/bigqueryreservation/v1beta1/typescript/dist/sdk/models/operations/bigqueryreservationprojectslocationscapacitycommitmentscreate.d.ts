import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    capacityCommitmentId?: string;
    enforceSingleAdminProjectPerOrg?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams;
    queryParams: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams;
    request?: shared.CapacityCommitmentInput;
    security: BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse extends SpeakeasyBase {
    capacityCommitment?: shared.CapacityCommitment;
    contentType: string;
    statusCode: number;
}
