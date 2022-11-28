import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
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
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsListRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsVolumesSnapshotsListPathParams;
    queryParams: BaremetalsolutionProjectsLocationsVolumesSnapshotsListQueryParams;
    security: BaremetalsolutionProjectsLocationsVolumesSnapshotsListSecurity;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsListResponse extends SpeakeasyBase {
    contentType: string;
    listVolumeSnapshotsResponse?: shared.ListVolumeSnapshotsResponse;
    statusCode: number;
}
