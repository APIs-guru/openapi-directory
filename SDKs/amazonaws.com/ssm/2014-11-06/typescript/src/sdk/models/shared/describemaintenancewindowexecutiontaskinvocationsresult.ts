import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MaintenanceWindowExecutionTaskInvocationIdentity } from "./maintenancewindowexecutiontaskinvocationidentity";


export class DescribeMaintenanceWindowExecutionTaskInvocationsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=WindowExecutionTaskInvocationIdentities", elemType: shared.MaintenanceWindowExecutionTaskInvocationIdentity })
  windowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentity[];
}
