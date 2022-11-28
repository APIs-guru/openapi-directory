import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeClustersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ShowShardDetails" })
  showShardDetails?: boolean;
}
