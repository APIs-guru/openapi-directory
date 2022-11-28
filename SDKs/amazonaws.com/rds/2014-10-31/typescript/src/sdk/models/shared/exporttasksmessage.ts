import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportTask } from "./exporttask";



export class ExportTasksMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: ExportTask })
  exportTasks?: ExportTask[];

  @SpeakeasyMetadata()
  marker?: string;
}
