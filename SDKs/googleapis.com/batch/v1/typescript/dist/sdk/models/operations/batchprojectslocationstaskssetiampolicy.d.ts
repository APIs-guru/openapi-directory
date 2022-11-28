import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchProjectsLocationsTasksSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class BatchProjectsLocationsTasksSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class BatchProjectsLocationsTasksSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BatchProjectsLocationsTasksSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: BatchProjectsLocationsTasksSetIamPolicyPathParams;
    queryParams: BatchProjectsLocationsTasksSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: BatchProjectsLocationsTasksSetIamPolicySecurity;
}
export declare class BatchProjectsLocationsTasksSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
