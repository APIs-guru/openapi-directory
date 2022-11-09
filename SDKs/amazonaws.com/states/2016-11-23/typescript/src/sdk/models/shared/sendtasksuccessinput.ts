import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendTaskSuccessInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=output" })
  output: string;

  @Metadata({ data: "json, name=taskToken" })
  taskToken: string;
}
