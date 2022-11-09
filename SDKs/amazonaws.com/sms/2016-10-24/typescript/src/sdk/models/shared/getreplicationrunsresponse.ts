import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationJob } from "./replicationjob";
import { ReplicationRun } from "./replicationrun";


export class GetReplicationRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=replicationJob" })
  replicationJob?: ReplicationJob;

  @Metadata({ data: "json, name=replicationRunList", elemType: shared.ReplicationRun })
  replicationRunList?: ReplicationRun[];
}
