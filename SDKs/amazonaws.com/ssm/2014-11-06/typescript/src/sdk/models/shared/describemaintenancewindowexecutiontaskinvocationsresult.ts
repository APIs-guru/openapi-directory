import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionTaskInvocationIdentity } from "./maintenancewindowexecutiontaskinvocationidentity";



export class DescribeMaintenanceWindowExecutionTaskInvocationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionTaskInvocationIdentities", elemType: MaintenanceWindowExecutionTaskInvocationIdentity })
  windowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentity[];
}
