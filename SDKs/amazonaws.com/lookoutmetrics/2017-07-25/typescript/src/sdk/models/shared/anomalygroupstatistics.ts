import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ItemizedMetricStats } from "./itemizedmetricstats";


// AnomalyGroupStatistics
/** 
 * Aggregated statistics for a group of anomalous metrics.
**/
export class AnomalyGroupStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationStartDate" })
  evaluationStartDate?: string;

  @Metadata({ data: "json, name=ItemizedMetricStatsList", elemType: shared.ItemizedMetricStats })
  itemizedMetricStatsList?: ItemizedMetricStats[];

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;
}
