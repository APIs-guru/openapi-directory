import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationJob } from "./replicationjob";



export class GetReplicationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationJobList", elemType: ReplicationJob })
  replicationJobList?: ReplicationJob[];
}
