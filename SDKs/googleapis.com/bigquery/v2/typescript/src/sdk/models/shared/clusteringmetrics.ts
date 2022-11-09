import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cluster } from "./cluster";


// ClusteringMetrics
/** 
 * Evaluation metrics for clustering models.
**/
export class ClusteringMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusters", elemType: shared.Cluster })
  clusters?: Cluster[];

  @Metadata({ data: "json, name=daviesBouldinIndex" })
  daviesBouldinIndex?: number;

  @Metadata({ data: "json, name=meanSquaredDistance" })
  meanSquaredDistance?: number;
}
