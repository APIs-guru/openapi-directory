import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelTaskOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
