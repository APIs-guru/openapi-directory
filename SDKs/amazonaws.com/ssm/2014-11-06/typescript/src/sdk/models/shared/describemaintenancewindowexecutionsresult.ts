import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowExecution } from "./maintenancewindowexecution";


export class DescribeMaintenanceWindowExecutionsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WindowExecutions", elemType: shared.MaintenanceWindowExecution })
  windowExecutions?: MaintenanceWindowExecution[];
}
