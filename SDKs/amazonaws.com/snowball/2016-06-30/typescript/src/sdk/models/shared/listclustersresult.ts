import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClusterListEntry } from "./clusterlistentry";



export class ListClustersResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterListEntries", elemType: ClusterListEntry })
  clusterListEntries?: ClusterListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
