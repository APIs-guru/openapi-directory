import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationRunStageDetails } from "./replicationrunstagedetails";
import { ReplicationRunStateEnum } from "./replicationrunstateenum";
import { ReplicationRunTypeEnum } from "./replicationruntypeenum";
/**
 * Represents a replication run.
**/
export declare class ReplicationRun extends SpeakeasyBase {
    amiId?: string;
    completedTime?: Date;
    description?: string;
    encrypted?: boolean;
    kmsKeyId?: string;
    replicationRunId?: string;
    scheduledStartTime?: Date;
    stageDetails?: ReplicationRunStageDetails;
    state?: ReplicationRunStateEnum;
    statusMessage?: string;
    type?: ReplicationRunTypeEnum;
}
