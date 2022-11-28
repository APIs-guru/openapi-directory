import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendTaskSuccessInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=output" })
  output: string;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;
}
