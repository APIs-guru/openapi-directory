import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AutomlProjectsLocationsModelsGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class AutomlProjectsLocationsModelsGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class AutomlProjectsLocationsModelsGetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class AutomlProjectsLocationsModelsGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: AutomlProjectsLocationsModelsGetIamPolicyPathParams;
    queryParams: AutomlProjectsLocationsModelsGetIamPolicyQueryParams;
    security: AutomlProjectsLocationsModelsGetIamPolicySecurity;
}
export declare class AutomlProjectsLocationsModelsGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
