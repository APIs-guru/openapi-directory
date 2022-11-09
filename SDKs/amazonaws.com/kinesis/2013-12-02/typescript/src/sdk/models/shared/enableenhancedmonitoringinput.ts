import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsNameEnum } from "./metricsnameenum";


// EnableEnhancedMonitoringInput
/** 
 * Represents the input for <a>EnableEnhancedMonitoring</a>.
**/
export class EnableEnhancedMonitoringInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ShardLevelMetrics" })
  shardLevelMetrics: MetricsNameEnum[];

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}
