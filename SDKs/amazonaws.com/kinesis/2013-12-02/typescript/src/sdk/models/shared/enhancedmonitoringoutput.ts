import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MetricsNameEnum } from "./metricsnameenum";
import { MetricsNameEnum } from "./metricsnameenum";


// EnhancedMonitoringOutput
/** 
 * Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
**/
export class EnhancedMonitoringOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentShardLevelMetrics" })
  currentShardLevelMetrics?: MetricsNameEnum[];

  @Metadata({ data: "json, name=DesiredShardLevelMetrics" })
  desiredShardLevelMetrics?: MetricsNameEnum[];

  @Metadata({ data: "json, name=StreamName" })
  streamName?: string;
}
