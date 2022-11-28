import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringScheduleSummary } from "./monitoringschedulesummary";



export class ListMonitoringSchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MonitoringScheduleSummaries", elemType: MonitoringScheduleSummary })
  monitoringScheduleSummaries: MonitoringScheduleSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
