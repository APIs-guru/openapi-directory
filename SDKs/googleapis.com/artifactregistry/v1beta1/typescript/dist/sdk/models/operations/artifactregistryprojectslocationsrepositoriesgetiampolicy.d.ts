import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesGetIamPolicySecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesGetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
