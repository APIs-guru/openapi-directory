import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledWindowExecution } from "./scheduledwindowexecution";



export class DescribeMaintenanceWindowScheduleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduledWindowExecutions", elemType: ScheduledWindowExecution })
  scheduledWindowExecutions?: ScheduledWindowExecution[];
}
