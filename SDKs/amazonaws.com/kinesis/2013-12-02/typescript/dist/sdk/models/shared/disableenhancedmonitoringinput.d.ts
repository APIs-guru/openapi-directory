import { SpeakeasyBase } from "../../../internal/utils";
import { MetricsNameEnum } from "./metricsnameenum";
/**
 * Represents the input for <a>DisableEnhancedMonitoring</a>.
**/
export declare class DisableEnhancedMonitoringInput extends SpeakeasyBase {
    shardLevelMetrics: MetricsNameEnum[];
    streamName: string;
}
