import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteHumanTaskUiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;
}
