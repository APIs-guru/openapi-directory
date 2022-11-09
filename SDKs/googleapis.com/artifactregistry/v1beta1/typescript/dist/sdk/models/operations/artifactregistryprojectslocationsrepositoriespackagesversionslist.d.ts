import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams extends SpeakeasyBase {
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
    view?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    listVersionsResponse?: shared.ListVersionsResponse;
    statusCode: number;
}
