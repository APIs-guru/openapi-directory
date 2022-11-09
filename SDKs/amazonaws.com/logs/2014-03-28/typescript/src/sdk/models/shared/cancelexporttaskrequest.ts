import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelExportTaskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskId" })
  taskId: string;
}
