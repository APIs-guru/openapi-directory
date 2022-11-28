import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReplicationJobsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=replicationJobId" })
  replicationJobId?: string;
}
