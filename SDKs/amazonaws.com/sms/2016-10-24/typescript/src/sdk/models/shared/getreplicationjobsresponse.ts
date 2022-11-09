import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReplicationJob } from "./replicationjob";


export class GetReplicationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=replicationJobList", elemType: shared.ReplicationJob })
  replicationJobList?: ReplicationJob[];
}
