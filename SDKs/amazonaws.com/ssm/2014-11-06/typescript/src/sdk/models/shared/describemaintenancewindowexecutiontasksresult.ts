import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowExecutionTaskIdentity } from "./maintenancewindowexecutiontaskidentity";


export class DescribeMaintenanceWindowExecutionTasksResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WindowExecutionTaskIdentities", elemType: shared.MaintenanceWindowExecutionTaskIdentity })
  windowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[];
}
