import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecution } from "./maintenancewindowexecution";



export class DescribeMaintenanceWindowExecutionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutions", elemType: MaintenanceWindowExecution })
  windowExecutions?: MaintenanceWindowExecution[];
}
