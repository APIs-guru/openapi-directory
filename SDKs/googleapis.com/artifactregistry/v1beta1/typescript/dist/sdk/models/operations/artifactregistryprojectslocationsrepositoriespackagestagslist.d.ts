import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsListResponse extends SpeakeasyBase {
    contentType: string;
    listTagsResponse?: shared.ListTagsResponse;
    statusCode: number;
}
