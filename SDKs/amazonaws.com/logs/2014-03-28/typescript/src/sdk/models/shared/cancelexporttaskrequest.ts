import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelExportTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId: string;
}
