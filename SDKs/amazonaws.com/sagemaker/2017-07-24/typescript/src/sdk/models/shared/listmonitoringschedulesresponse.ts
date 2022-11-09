import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoringScheduleSummary } from "./monitoringschedulesummary";


export class ListMonitoringSchedulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MonitoringScheduleSummaries", elemType: shared.MonitoringScheduleSummary })
  monitoringScheduleSummaries: MonitoringScheduleSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
