import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RespondActivityTaskCompletedInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: string;

  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;
}
