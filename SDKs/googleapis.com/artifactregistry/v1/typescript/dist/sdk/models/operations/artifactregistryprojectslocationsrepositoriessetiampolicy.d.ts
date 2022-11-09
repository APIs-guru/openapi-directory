import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyPathParams extends SpeakeasyBase {
    resource: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyQueryParams;
    request?: shared.SetIamPolicyRequest;
    security: ArtifactregistryProjectsLocationsRepositoriesSetIamPolicySecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesSetIamPolicyResponse extends SpeakeasyBase {
    contentType: string;
    policy?: shared.Policy;
    statusCode: number;
}
