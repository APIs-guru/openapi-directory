import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMaintenanceWindowExecutionTaskInvocationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InvocationId" })
  invocationId: string;

  @Metadata({ data: "json, name=TaskId" })
  taskId: string;

  @Metadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId: string;
}
