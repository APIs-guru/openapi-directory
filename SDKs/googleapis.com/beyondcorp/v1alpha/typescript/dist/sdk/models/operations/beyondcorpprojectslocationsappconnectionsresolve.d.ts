import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppConnectionsResolvePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsResolveQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    appConnectorId?: string;
    callback?: string;
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
export declare class BeyondcorpProjectsLocationsAppConnectionsResolveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsResolveRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppConnectionsResolvePathParams;
    queryParams: BeyondcorpProjectsLocationsAppConnectionsResolveQueryParams;
    security: BeyondcorpProjectsLocationsAppConnectionsResolveSecurity;
}
export declare class BeyondcorpProjectsLocationsAppConnectionsResolveResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse?: shared.GoogleCloudBeyondcorpAppconnectionsV1alphaResolveAppConnectionsResponse;
    statusCode: number;
}
