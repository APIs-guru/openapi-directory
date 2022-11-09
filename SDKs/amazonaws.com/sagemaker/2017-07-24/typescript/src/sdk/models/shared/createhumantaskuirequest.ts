import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";
import { UiTemplate } from "./uitemplate";


export class CreateHumanTaskUiRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanTaskUiName" })
  humanTaskUiName: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UiTemplate" })
  uiTemplate: UiTemplate;
}
