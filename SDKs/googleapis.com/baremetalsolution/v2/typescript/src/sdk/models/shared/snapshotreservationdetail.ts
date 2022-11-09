import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SnapshotReservationDetail
/** 
 * Details about snapshot space reservation and usage on the storage volume.
**/
export class SnapshotReservationDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=reservedSpaceGib" })
  reservedSpaceGib?: string;

  @Metadata({ data: "json, name=reservedSpacePercent" })
  reservedSpacePercent?: number;

  @Metadata({ data: "json, name=reservedSpaceRemainingGib" })
  reservedSpaceRemainingGib?: string;

  @Metadata({ data: "json, name=reservedSpaceUsedPercent" })
  reservedSpaceUsedPercent?: number;
}
