import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsVolumesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsVolumesListQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsVolumesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsVolumesListRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsVolumesListPathParams;
    queryParams: BaremetalsolutionProjectsLocationsVolumesListQueryParams;
    security: BaremetalsolutionProjectsLocationsVolumesListSecurity;
}
export declare class BaremetalsolutionProjectsLocationsVolumesListResponse extends SpeakeasyBase {
    contentType: string;
    listVolumesResponse?: shared.ListVolumesResponse;
    statusCode: number;
}
