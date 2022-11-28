import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsNameEnum } from "./metricsnameenum";



// EnhancedMetrics
/** 
 * Represents enhanced metrics types.
**/
export class EnhancedMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardLevelMetrics" })
  shardLevelMetrics?: MetricsNameEnum[];
}
