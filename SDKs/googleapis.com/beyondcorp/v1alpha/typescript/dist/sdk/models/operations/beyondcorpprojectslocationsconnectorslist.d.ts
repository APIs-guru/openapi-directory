import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BeyondcorpProjectsLocationsConnectorsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BeyondcorpProjectsLocationsConnectorsListQueryParams extends SpeakeasyBase {
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
export declare class BeyondcorpProjectsLocationsConnectorsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BeyondcorpProjectsLocationsConnectorsListRequest extends SpeakeasyBase {
    pathParams: BeyondcorpProjectsLocationsConnectorsListPathParams;
    queryParams: BeyondcorpProjectsLocationsConnectorsListQueryParams;
    security: BeyondcorpProjectsLocationsConnectorsListSecurity;
}
export declare class BeyondcorpProjectsLocationsConnectorsListResponse extends SpeakeasyBase {
    contentType: string;
    listConnectorsResponse?: shared.ListConnectorsResponse;
    statusCode: number;
}
