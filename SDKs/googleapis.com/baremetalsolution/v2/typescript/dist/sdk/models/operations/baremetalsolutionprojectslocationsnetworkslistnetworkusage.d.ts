import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams extends SpeakeasyBase {
    location: string;
}
export declare class BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsNetworksListNetworkUsageRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsNetworksListNetworkUsagePathParams;
    queryParams: BaremetalsolutionProjectsLocationsNetworksListNetworkUsageQueryParams;
    security: BaremetalsolutionProjectsLocationsNetworksListNetworkUsageSecurity;
}
export declare class BaremetalsolutionProjectsLocationsNetworksListNetworkUsageResponse extends SpeakeasyBase {
    contentType: string;
    listNetworkUsageResponse?: shared.ListNetworkUsageResponse;
    statusCode: number;
}
