import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowTask } from "./maintenancewindowtask";


export class DescribeMaintenanceWindowTasksResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Tasks", elemType: shared.MaintenanceWindowTask })
  tasks?: MaintenanceWindowTask[];
}
