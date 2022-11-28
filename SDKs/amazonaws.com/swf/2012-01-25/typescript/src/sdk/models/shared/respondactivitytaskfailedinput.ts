import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RespondActivityTaskFailedInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;
}
