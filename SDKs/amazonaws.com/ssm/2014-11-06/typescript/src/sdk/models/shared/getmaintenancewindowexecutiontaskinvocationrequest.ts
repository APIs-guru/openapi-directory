import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMaintenanceWindowExecutionTaskInvocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InvocationId" })
  invocationId: string;

  @SpeakeasyMetadata({ data: "json, name=TaskId" })
  taskId: string;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId: string;
}
