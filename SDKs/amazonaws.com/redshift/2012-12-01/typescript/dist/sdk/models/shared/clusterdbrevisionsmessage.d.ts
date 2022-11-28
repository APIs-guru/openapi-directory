import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterDbRevision } from "./clusterdbrevision";
export declare class ClusterDbRevisionsMessage extends SpeakeasyBase {
    clusterDbRevisions?: ClusterDbRevision[];
    marker?: string;
}
