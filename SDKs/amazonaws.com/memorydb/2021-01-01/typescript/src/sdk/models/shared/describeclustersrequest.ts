import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeClustersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterName" })
  clusterName?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ShowShardDetails" })
  showShardDetails?: boolean;
}
