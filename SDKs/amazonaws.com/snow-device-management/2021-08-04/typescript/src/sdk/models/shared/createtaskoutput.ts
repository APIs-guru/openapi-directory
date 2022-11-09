import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateTaskOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskArn" })
  taskArn?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
