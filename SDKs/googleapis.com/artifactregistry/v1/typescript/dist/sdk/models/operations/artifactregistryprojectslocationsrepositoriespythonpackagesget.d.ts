import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams extends SpeakeasyBase {
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
    view?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse extends SpeakeasyBase {
    contentType: string;
    pythonPackage?: shared.PythonPackage;
    statusCode: number;
}
