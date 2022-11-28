import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterMetadata } from "./clustermetadata";



export class DescribeClusterResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterMetadata" })
  clusterMetadata?: ClusterMetadata;
}
