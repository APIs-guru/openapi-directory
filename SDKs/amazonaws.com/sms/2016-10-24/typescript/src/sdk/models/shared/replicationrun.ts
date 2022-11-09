import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationRunStageDetails } from "./replicationrunstagedetails";
import { ReplicationRunStateEnum } from "./replicationrunstateenum";
import { ReplicationRunTypeEnum } from "./replicationruntypeenum";


// ReplicationRun
/** 
 * Represents a replication run.
**/
export class ReplicationRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=amiId" })
  amiId?: string;

  @Metadata({ data: "json, name=completedTime" })
  completedTime?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=encrypted" })
  encrypted?: boolean;

  @Metadata({ data: "json, name=kmsKeyId" })
  kmsKeyId?: string;

  @Metadata({ data: "json, name=replicationRunId" })
  replicationRunId?: string;

  @Metadata({ data: "json, name=scheduledStartTime" })
  scheduledStartTime?: Date;

  @Metadata({ data: "json, name=stageDetails" })
  stageDetails?: ReplicationRunStageDetails;

  @Metadata({ data: "json, name=state" })
  state?: ReplicationRunStateEnum;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=type" })
  type?: ReplicationRunTypeEnum;
}
