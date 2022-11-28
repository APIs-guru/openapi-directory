import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsNameEnum } from "./metricsnameenum";



// DisableEnhancedMonitoringInput
/** 
 * Represents the input for <a>DisableEnhancedMonitoring</a>.
**/
export class DisableEnhancedMonitoringInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ShardLevelMetrics" })
  shardLevelMetrics: MetricsNameEnum[];

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}
