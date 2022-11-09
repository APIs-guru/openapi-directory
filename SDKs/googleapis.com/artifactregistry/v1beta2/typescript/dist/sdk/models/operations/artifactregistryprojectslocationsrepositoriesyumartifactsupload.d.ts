import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadQueryParams;
    request?: Uint8Array;
    security: ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesYumArtifactsUploadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uploadYumArtifactMediaResponse?: shared.UploadYumArtifactMediaResponse;
}
