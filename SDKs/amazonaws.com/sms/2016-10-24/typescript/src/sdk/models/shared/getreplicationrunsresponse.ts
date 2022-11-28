import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationJob } from "./replicationjob";
import { ReplicationRun } from "./replicationrun";



export class GetReplicationRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationJob" })
  replicationJob?: ReplicationJob;

  @SpeakeasyMetadata({ data: "json, name=replicationRunList", elemType: ReplicationRun })
  replicationRunList?: ReplicationRun[];
}
