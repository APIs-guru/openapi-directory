import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";



export class ListMonitoringExecutionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringExecutionSummaries", elemType: MonitoringExecutionSummary })
  monitoringExecutionSummaries: MonitoringExecutionSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
