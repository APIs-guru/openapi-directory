import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";
export declare class ListMonitoringExecutionsResponse extends SpeakeasyBase {
    monitoringExecutionSummaries: MonitoringExecutionSummary[];
    nextToken?: string;
}
