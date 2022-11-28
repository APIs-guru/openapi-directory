import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsNfsSharesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsNfsSharesListQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsNfsSharesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsNfsSharesListRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsNfsSharesListPathParams;
    queryParams: BaremetalsolutionProjectsLocationsNfsSharesListQueryParams;
    security: BaremetalsolutionProjectsLocationsNfsSharesListSecurity;
}
export declare class BaremetalsolutionProjectsLocationsNfsSharesListResponse extends SpeakeasyBase {
    contentType: string;
    listNfsSharesResponse?: shared.ListNfsSharesResponse;
    statusCode: number;
}
