import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { UiTemplate } from "./uitemplate";



export class CreateHumanTaskUiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UiTemplate" })
  uiTemplate: UiTemplate;
}
