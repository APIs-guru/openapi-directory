import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterListEntry } from "./clusterlistentry";
export declare class ListClustersResult extends SpeakeasyBase {
    clusterListEntries?: ClusterListEntry[];
    nextToken?: string;
}
