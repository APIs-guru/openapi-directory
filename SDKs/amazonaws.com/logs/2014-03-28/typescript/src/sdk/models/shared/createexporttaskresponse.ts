import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateExportTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
