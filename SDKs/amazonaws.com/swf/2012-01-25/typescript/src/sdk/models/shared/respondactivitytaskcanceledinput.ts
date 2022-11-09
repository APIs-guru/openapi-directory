import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RespondActivityTaskCanceledInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: string;

  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;
}
