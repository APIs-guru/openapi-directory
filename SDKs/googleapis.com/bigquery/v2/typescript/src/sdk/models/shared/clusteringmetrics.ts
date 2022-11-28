import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cluster } from "./cluster";



// ClusteringMetrics
/** 
 * Evaluation metrics for clustering models.
**/
export class ClusteringMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusters", elemType: Cluster })
  clusters?: Cluster[];

  @SpeakeasyMetadata({ data: "json, name=daviesBouldinIndex" })
  daviesBouldinIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=meanSquaredDistance" })
  meanSquaredDistance?: number;
}
