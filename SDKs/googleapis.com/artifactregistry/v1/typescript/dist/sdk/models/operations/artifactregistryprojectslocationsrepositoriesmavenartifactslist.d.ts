import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse extends SpeakeasyBase {
    contentType: string;
    listMavenArtifactsResponse?: shared.ListMavenArtifactsResponse;
    statusCode: number;
}
