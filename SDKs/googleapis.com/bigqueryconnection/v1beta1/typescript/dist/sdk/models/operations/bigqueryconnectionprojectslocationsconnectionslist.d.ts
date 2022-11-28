import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigqueryconnectionProjectsLocationsConnectionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsListSecurity extends SpeakeasyBase {
    option1?: BigqueryconnectionProjectsLocationsConnectionsListSecurityOption1;
    option2?: BigqueryconnectionProjectsLocationsConnectionsListSecurityOption2;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsListRequest extends SpeakeasyBase {
    pathParams: BigqueryconnectionProjectsLocationsConnectionsListPathParams;
    queryParams: BigqueryconnectionProjectsLocationsConnectionsListQueryParams;
    security: BigqueryconnectionProjectsLocationsConnectionsListSecurity;
}
export declare class BigqueryconnectionProjectsLocationsConnectionsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectionsResponse?: shared.ListConnectionsResponse;
    statusCode: number;
}
