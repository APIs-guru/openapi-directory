import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RespondActivityTaskCanceledInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;
}
