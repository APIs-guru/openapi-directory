import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchQueryParams;
    request?: shared.Tag;
    security: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
