import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationRunStageDetails } from "./replicationrunstagedetails";
import { ReplicationRunStateEnum } from "./replicationrunstateenum";
import { ReplicationRunTypeEnum } from "./replicationruntypeenum";



// ReplicationRun
/** 
 * Represents a replication run.
**/
export class ReplicationRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amiId" })
  amiId?: string;

  @SpeakeasyMetadata({ data: "json, name=completedTime" })
  completedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationRunId" })
  replicationRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledStartTime" })
  scheduledStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=stageDetails" })
  stageDetails?: ReplicationRunStageDetails;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ReplicationRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReplicationRunTypeEnum;
}
