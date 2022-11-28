import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams extends SpeakeasyBase {
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
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams;
    queryParams: BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams;
    request?: shared.MergeCapacityCommitmentsRequest;
    security: BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse extends SpeakeasyBase {
    capacityCommitment?: shared.CapacityCommitment;
    contentType: string;
    statusCode: number;
}
