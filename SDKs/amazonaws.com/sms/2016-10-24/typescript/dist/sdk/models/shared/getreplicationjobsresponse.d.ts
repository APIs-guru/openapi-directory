import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationJob } from "./replicationjob";
export declare class GetReplicationJobsResponse extends SpeakeasyBase {
    nextToken?: string;
    replicationJobList?: ReplicationJob[];
}
