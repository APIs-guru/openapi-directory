import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsGetQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsGetRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsVolumesSnapshotsGetPathParams;
    queryParams: BaremetalsolutionProjectsLocationsVolumesSnapshotsGetQueryParams;
    security: BaremetalsolutionProjectsLocationsVolumesSnapshotsGetSecurity;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumeSnapshot?: shared.VolumeSnapshot;
}
