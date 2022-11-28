import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceTrack } from "./maintenancetrack";



export class TrackListMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: MaintenanceTrack })
  maintenanceTracks?: MaintenanceTrack[];

  @SpeakeasyMetadata()
  marker?: string;
}
