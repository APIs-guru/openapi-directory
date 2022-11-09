import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeSnapshotsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ShowDetail" })
  showDetail?: boolean;

  @Metadata({ data: "json, name=SnapshotName" })
  snapshotName?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;
}
