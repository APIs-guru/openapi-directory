import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse extends SpeakeasyBase {
    contentType: string;
    listPackagesResponse?: shared.ListPackagesResponse;
    statusCode: number;
}
