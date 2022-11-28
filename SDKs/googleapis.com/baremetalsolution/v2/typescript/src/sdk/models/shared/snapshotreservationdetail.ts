import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnapshotReservationDetail
/** 
 * Details about snapshot space reservation and usage on the storage volume.
**/
export class SnapshotReservationDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reservedSpaceGib" })
  reservedSpaceGib?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedSpacePercent" })
  reservedSpacePercent?: number;

  @SpeakeasyMetadata({ data: "json, name=reservedSpaceRemainingGib" })
  reservedSpaceRemainingGib?: string;

  @SpeakeasyMetadata({ data: "json, name=reservedSpaceUsedPercent" })
  reservedSpaceUsedPercent?: number;
}
