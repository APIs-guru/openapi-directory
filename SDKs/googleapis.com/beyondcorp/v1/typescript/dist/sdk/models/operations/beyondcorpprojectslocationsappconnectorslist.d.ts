import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsAppConnectorsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsAppConnectorsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsAppConnectorsListPathParams;
    queryParams: BeyondcorpProjectsLocationsAppConnectorsListQueryParams;
    security: BeyondcorpProjectsLocationsAppConnectorsListSecurity;
}
export declare class BeyondcorpProjectsLocationsAppConnectorsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse?: shared.GoogleCloudBeyondcorpAppconnectorsV1ListAppConnectorsResponse;
    statusCode: number;
}
