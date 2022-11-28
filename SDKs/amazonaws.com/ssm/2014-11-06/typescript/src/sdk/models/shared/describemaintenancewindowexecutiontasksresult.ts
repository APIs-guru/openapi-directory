import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionTaskIdentity } from "./maintenancewindowexecutiontaskidentity";



export class DescribeMaintenanceWindowExecutionTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionTaskIdentities", elemType: MaintenanceWindowExecutionTaskIdentity })
  windowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[];
}
