import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ClusterMetadata } from "./clustermetadata";


export class DescribeClusterResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterMetadata" })
  clusterMetadata?: ClusterMetadata;
}
