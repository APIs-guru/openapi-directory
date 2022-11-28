import { SpeakeasyBase } from "../../../internal/utils";
import { MetricsNameEnum } from "./metricsnameenum";
/**
 * Represents the input for <a>EnableEnhancedMonitoring</a>.
**/
export declare class EnableEnhancedMonitoringInput extends SpeakeasyBase {
    shardLevelMetrics: MetricsNameEnum[];
    streamName: string;
}
