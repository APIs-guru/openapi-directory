import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsAppConnectionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppConnectionsListPathParams;
    queryParams: BeyondcorpProjectsLocationsAppConnectionsListQueryParams;
    security: BeyondcorpProjectsLocationsAppConnectionsListSecurity;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse?: shared.GoogleCloudBeyondcorpAppconnectionsV1ListAppConnectionsResponse;
    statusCode: number;
}
