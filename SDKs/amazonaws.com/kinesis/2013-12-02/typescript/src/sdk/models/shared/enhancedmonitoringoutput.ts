import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricsNameEnum } from "./metricsnameenum";



// EnhancedMonitoringOutput
/** 
 * Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
**/
export class EnhancedMonitoringOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentShardLevelMetrics" })
  currentShardLevelMetrics?: MetricsNameEnum[];

  @SpeakeasyMetadata({ data: "json, name=DesiredShardLevelMetrics" })
  desiredShardLevelMetrics?: MetricsNameEnum[];

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName?: string;
}
