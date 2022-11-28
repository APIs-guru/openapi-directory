import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsConnectionsResolvePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsConnectionsResolveQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    connectorId?: string;
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
export declare class BeyondcorpProjectsLocationsConnectionsResolveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsConnectionsResolveRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsConnectionsResolvePathParams;
    queryParams: BeyondcorpProjectsLocationsConnectionsResolveQueryParams;
    security: BeyondcorpProjectsLocationsConnectionsResolveSecurity;
}
export declare class BeyondcorpProjectsLocationsConnectionsResolveResponse extends SpeakeasyBase {
    contentType: string;
    resolveConnectionsResponse?: shared.ResolveConnectionsResponse;
    statusCode: number;
}
