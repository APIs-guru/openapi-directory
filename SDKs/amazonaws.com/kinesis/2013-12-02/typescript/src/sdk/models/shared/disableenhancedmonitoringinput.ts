import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsNameEnum } from "./metricsnameenum";


// DisableEnhancedMonitoringInput
/** 
 * Represents the input for <a>DisableEnhancedMonitoring</a>.
**/
export class DisableEnhancedMonitoringInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardLevelMetrics" })
  shardLevelMetrics: MetricsNameEnum[];

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
