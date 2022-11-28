import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringConstraintsResource } from "./monitoringconstraintsresource";
import { MonitoringStatisticsResource } from "./monitoringstatisticsresource";
/**
 * Configuration for monitoring constraints and monitoring statistics. These baseline resources are compared against the results of the current job from the series of jobs scheduled to collect data periodically.
**/
export declare class MonitoringBaselineConfig extends SpeakeasyBase {
    baseliningJobName?: string;
    constraintsResource?: MonitoringConstraintsResource;
    statisticsResource?: MonitoringStatisticsResource;
}
