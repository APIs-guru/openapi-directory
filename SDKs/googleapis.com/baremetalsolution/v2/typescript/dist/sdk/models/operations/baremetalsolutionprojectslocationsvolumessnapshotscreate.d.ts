import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsVolumesSnapshotsCreatePathParams;
    queryParams: BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateQueryParams;
    request?: shared.VolumeSnapshotInput;
    security: BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateSecurity;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    volumeSnapshot?: shared.VolumeSnapshot;
}
