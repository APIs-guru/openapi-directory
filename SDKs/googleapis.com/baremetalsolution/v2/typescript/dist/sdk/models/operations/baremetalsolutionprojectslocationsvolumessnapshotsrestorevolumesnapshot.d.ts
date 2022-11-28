import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams extends SpeakeasyBase {
    volumeSnapshot: string;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams extends SpeakeasyBase {
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
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotRequest extends SpeakeasyBase {
    pathParams: BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotPathParams;
    queryParams: BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotQueryParams;
    request?: Map<string, any>;
    security: BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotSecurity;
}
export declare class BaremetalsolutionProjectsLocationsVolumesSnapshotsRestoreVolumeSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
