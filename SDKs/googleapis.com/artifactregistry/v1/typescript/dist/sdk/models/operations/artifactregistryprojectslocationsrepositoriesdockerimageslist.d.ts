import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesDockerImagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesDockerImagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesDockerImagesListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesDockerImagesListPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesDockerImagesListQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesDockerImagesListSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesDockerImagesListResponse extends SpeakeasyBase {
    contentType: string;
    listDockerImagesResponse?: shared.ListDockerImagesResponse;
    statusCode: number;
}
