import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsTasksGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BatchProjectsLocationsTasksGetIamPolicyQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    optionsRequestedPolicyVersion?: number;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BatchProjectsLocationsTasksGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsTasksGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsTasksGetIamPolicyPathParams;
    queryParams: BatchProjectsLocationsTasksGetIamPolicyQueryParams;
    security: BatchProjectsLocationsTasksGetIamPolicySecurity;
}
export declare class BatchProjectsLocationsTasksGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
