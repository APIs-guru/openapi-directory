import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsNameEnum } from "./metricsnameenum";



// EnableEnhancedMonitoringInput
/** 
 * Represents the input for <a>EnableEnhancedMonitoring</a>.
**/
export class EnableEnhancedMonitoringInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardLevelMetrics" })
  shardLevelMetrics: MetricsNameEnum[];

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
