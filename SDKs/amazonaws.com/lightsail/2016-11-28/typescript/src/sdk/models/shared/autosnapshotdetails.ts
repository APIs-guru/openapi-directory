import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachedDisk } from "./attacheddisk";
import { AutoSnapshotStatusEnum } from "./autosnapshotstatusenum";


// AutoSnapshotDetails
/** 
 * Describes an automatic snapshot.
**/
export class AutoSnapshotDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=fromAttachedDisks", elemType: shared.AttachedDisk })
  fromAttachedDisks?: AttachedDisk[];

  @Metadata({ data: "json, name=status" })
  status?: AutoSnapshotStatusEnum;
}
