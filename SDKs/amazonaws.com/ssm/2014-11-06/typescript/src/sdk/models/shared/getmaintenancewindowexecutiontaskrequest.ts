import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMaintenanceWindowExecutionTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TaskId" })
  taskId: string;

  @SpeakeasyMetadata({ data: "json, name=WindowExecutionId" })
  windowExecutionId: string;
}
