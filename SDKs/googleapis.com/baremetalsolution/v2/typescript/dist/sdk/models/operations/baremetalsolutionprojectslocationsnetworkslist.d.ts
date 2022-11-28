import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsNetworksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsNetworksListQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsNetworksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsNetworksListRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsNetworksListPathParams;
    queryParams: BaremetalsolutionProjectsLocationsNetworksListQueryParams;
    security: BaremetalsolutionProjectsLocationsNetworksListSecurity;
}
export declare class BaremetalsolutionProjectsLocationsNetworksListResponse extends SpeakeasyBase {
    contentType: string;
    listNetworksResponse?: shared.ListNetworksResponse;
    statusCode: number;
}
