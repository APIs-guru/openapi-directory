import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RespondActivityTaskCompletedInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=taskToken" })
  taskToken: string;
}
