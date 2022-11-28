import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsPatchQueryParams extends SpeakeasyBase {
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
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest extends SpeakeasyBase {
    pathParams: AssuredworkloadsOrganizationsLocationsWorkloadsPatchPathParams;
    queryParams: AssuredworkloadsOrganizationsLocationsWorkloadsPatchQueryParams;
    request?: shared.GoogleCloudAssuredworkloadsV1beta1WorkloadInput;
    security: AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity;
}
export declare class AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudAssuredworkloadsV1beta1Workload?: shared.GoogleCloudAssuredworkloadsV1beta1Workload;
    statusCode: number;
}
