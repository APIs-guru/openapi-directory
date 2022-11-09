import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    tagId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreatePathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateQueryParams;
    request?: shared.Tag;
    security: ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesPackagesTagsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
