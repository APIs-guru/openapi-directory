import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScheduledWindowExecution } from "./scheduledwindowexecution";


export class DescribeMaintenanceWindowScheduleResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ScheduledWindowExecutions", elemType: shared.ScheduledWindowExecution })
  scheduledWindowExecutions?: ScheduledWindowExecution[];
}
