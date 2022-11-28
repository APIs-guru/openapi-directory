import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    repositoryId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesCreateRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesCreatePathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesCreateQueryParams;
    request?: shared.RepositoryInput;
    security: ArtifactregistryProjectsLocationsRepositoriesCreateSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
