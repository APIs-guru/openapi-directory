import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ShowDetail" })
  showDetail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=SnapshotName" })
  snapshotName?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;
}
