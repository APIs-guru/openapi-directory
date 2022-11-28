import { SpeakeasyBase } from "../../../internal/utils";
import { MetricsNameEnum } from "./metricsnameenum";
/**
 * Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
**/
export declare class EnhancedMonitoringOutput extends SpeakeasyBase {
    currentShardLevelMetrics?: MetricsNameEnum[];
    desiredShardLevelMetrics?: MetricsNameEnum[];
    streamName?: string;
}
