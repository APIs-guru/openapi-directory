import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendTaskFailureInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;
}
