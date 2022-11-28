import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApigeeregistryProjectsLocationsArtifactsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ApigeeregistryProjectsLocationsArtifactsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ApigeeregistryProjectsLocationsArtifactsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ApigeeregistryProjectsLocationsArtifactsListRequest extends SpeakeasyBase {
    pathParams: ApigeeregistryProjectsLocationsArtifactsListPathParams;
    queryParams: ApigeeregistryProjectsLocationsArtifactsListQueryParams;
    security: ApigeeregistryProjectsLocationsArtifactsListSecurity;
}
export declare class ApigeeregistryProjectsLocationsArtifactsListResponse extends SpeakeasyBase {
    contentType: string;
    listArtifactsResponse?: shared.ListArtifactsResponse;
    statusCode: number;
}
