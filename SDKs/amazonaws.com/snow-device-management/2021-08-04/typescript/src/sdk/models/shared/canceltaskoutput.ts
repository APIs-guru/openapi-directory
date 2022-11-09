import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelTaskOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
