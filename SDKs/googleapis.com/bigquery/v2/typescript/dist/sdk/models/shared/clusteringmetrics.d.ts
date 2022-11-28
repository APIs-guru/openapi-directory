import { SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";
/**
 * Evaluation metrics for clustering models.
**/
export declare class ClusteringMetrics extends SpeakeasyBase {
    clusters?: Cluster[];
    daviesBouldinIndex?: number;
    meanSquaredDistance?: number;
}
