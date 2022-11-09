import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ClusterListEntry } from "./clusterlistentry";


export class ListClustersResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterListEntries", elemType: shared.ClusterListEntry })
  clusterListEntries?: ClusterListEntry[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
