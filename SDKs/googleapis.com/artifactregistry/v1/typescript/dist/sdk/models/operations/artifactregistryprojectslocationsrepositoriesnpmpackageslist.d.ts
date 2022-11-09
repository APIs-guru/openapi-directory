import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesNpmPackagesListResponse extends SpeakeasyBase {
    contentType: string;
    listNpmPackagesResponse?: shared.ListNpmPackagesResponse;
    statusCode: number;
}
