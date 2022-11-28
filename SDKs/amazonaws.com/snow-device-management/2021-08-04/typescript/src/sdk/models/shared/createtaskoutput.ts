import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTaskOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
