import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArtifactregistryProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ArtifactregistryProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class ArtifactregistryProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ArtifactregistryProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: ArtifactregistryProjectsLocationsListSecurityOption1;
    option2?: ArtifactregistryProjectsLocationsListSecurityOption2;
}
export declare class ArtifactregistryProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: ArtifactregistryProjectsLocationsListPathParams;
    queryParams: ArtifactregistryProjectsLocationsListQueryParams;
    security: ArtifactregistryProjectsLocationsListSecurity;
}
export declare class ArtifactregistryProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}
