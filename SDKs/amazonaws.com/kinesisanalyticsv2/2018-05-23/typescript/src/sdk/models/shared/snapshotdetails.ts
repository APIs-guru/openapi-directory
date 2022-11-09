import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnapshotStatusEnum } from "./snapshotstatusenum";


// SnapshotDetails
/** 
 * Provides details about a snapshot of application state.
**/
export class SnapshotDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;

  @Metadata({ data: "json, name=SnapshotCreationTimestamp" })
  snapshotCreationTimestamp?: Date;

  @Metadata({ data: "json, name=SnapshotName" })
  snapshotName: string;

  @Metadata({ data: "json, name=SnapshotStatus" })
  snapshotStatus: SnapshotStatusEnum;
}
