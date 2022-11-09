import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationJob } from "./replicationjob";
import { ReplicationRun } from "./replicationrun";
export declare class GetReplicationRunsResponse extends SpeakeasyBase {
    nextToken?: string;
    replicationJob?: ReplicationJob;
    replicationRunList?: ReplicationRun[];
}
