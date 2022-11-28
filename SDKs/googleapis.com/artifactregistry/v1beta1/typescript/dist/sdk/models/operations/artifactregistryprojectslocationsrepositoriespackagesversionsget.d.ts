import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams extends SpeakeasyBase {
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
    view?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    version?: shared.Version;
}
