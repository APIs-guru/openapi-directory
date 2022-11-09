import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadQueryParams;
    request?: Uint8Array;
    security: ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesKfpArtifactsUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadKfpArtifactMediaResponse?: shared.UploadKfpArtifactMediaResponse;
}
