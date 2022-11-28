import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeletePathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
