import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowTask } from "./maintenancewindowtask";



export class DescribeMaintenanceWindowTasksResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Tasks", elemType: MaintenanceWindowTask })
  tasks?: MaintenanceWindowTask[];
}
