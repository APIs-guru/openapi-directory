import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VolumeSnapshot } from "./volumesnapshot";



// ListVolumeSnapshotsResponse
/** 
 * Response message containing the list of volume snapshots.
**/
export class ListVolumeSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];

  @SpeakeasyMetadata({ data: "json, name=volumeSnapshots", elemType: VolumeSnapshot })
  volumeSnapshots?: VolumeSnapshot[];
}
