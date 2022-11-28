import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteHumanTaskUiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;
}
