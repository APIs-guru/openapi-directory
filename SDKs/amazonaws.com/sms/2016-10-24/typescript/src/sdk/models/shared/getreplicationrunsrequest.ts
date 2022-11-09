import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReplicationRunsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=replicationJobId" })
  replicationJobId: string;
}
