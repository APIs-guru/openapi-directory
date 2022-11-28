import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ItemizedMetricStats } from "./itemizedmetricstats";



// AnomalyGroupStatistics
/** 
 * Aggregated statistics for a group of anomalous metrics.
**/
export class AnomalyGroupStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationStartDate" })
  evaluationStartDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ItemizedMetricStatsList", elemType: ItemizedMetricStats })
  itemizedMetricStatsList?: ItemizedMetricStats[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
