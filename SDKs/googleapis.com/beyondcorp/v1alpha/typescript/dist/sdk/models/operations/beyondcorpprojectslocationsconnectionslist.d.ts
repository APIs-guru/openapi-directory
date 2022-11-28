import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsConnectionsListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsConnectionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsConnectionsListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsConnectionsListPathParams;
    queryParams: BeyondcorpProjectsLocationsConnectionsListQueryParams;
    security: BeyondcorpProjectsLocationsConnectionsListSecurity;
}
export declare class BeyondcorpProjectsLocationsConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
}
