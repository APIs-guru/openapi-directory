import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsNameEnum } from "./metricsnameenum";


// EnhancedMetrics
/** 
 * Represents enhanced metrics types.
**/
export class EnhancedMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardLevelMetrics" })
  shardLevelMetrics?: MetricsNameEnum[];
}
