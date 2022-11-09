import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams;
    request?: Uint8Array;
    security: ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadAptArtifactMediaResponse?: shared.UploadAptArtifactMediaResponse;
}
