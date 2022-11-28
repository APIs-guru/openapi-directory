import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams extends SpeakeasyBase {
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
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity extends SpeakeasyBase {
    option1?: BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption1;
    option2?: BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurityOption2;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitRequest extends SpeakeasyBase {
    pathParams: BigqueryreservationProjectsLocationsCapacityCommitmentsSplitPathParams;
    queryParams: BigqueryreservationProjectsLocationsCapacityCommitmentsSplitQueryParams;
    request?: shared.SplitCapacityCommitmentRequest;
    security: BigqueryreservationProjectsLocationsCapacityCommitmentsSplitSecurity;
}
export declare class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse extends SpeakeasyBase {
    contentType: string;
    splitCapacityCommitmentResponse?: shared.SplitCapacityCommitmentResponse;
    statusCode: number;
}
