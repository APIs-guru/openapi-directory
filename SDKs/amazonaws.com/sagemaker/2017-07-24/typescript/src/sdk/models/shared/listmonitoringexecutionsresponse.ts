import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";


export class ListMonitoringExecutionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringExecutionSummaries", elemType: shared.MonitoringExecutionSummary })
  monitoringExecutionSummaries: MonitoringExecutionSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
