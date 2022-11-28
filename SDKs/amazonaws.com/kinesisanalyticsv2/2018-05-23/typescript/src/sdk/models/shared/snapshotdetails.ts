import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotStatusEnum } from "./snapshotstatusenum";



// SnapshotDetails
/** 
 * Provides details about a snapshot of application state.
**/
export class SnapshotDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationVersionId" })
  applicationVersionId: number;

  @SpeakeasyMetadata({ data: "json, name=SnapshotCreationTimestamp" })
  snapshotCreationTimestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=SnapshotName" })
  snapshotName: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotStatus" })
  snapshotStatus: SnapshotStatusEnum;
}
