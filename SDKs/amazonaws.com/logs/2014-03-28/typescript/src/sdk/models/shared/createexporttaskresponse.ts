import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateExportTaskResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
