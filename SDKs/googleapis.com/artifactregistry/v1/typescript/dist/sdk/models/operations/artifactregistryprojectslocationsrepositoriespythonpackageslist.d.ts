import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesListResponse extends SpeakeasyBase {
    contentType: string;
    listPythonPackagesResponse?: shared.ListPythonPackagesResponse;
    statusCode: number;
}
