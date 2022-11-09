import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsRepositoriesFilesListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesFilesListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsRepositoriesFilesListPathParams;
    queryParams: ArtifactregistryProjectsLocationsRepositoriesFilesListQueryParams;
    security: ArtifactregistryProjectsLocationsRepositoriesFilesListSecurity;
}
export declare class ArtifactregistryProjectsLocationsRepositoriesFilesListResponse extends SpeakeasyBase {
    contentType: string;
    listFilesResponse?: shared.ListFilesResponse;
    statusCode: number;
}
