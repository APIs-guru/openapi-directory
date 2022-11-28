import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedDisk } from "./attacheddisk";
import { AutoSnapshotStatusEnum } from "./autosnapshotstatusenum";



// AutoSnapshotDetails
/** 
 * Describes an automatic snapshot.
**/
export class AutoSnapshotDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=fromAttachedDisks", elemType: AttachedDisk })
  fromAttachedDisks?: AttachedDisk[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AutoSnapshotStatusEnum;
}
