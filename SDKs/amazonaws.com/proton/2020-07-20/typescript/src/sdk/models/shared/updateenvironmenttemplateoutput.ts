import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplate } from "./environmenttemplate";



export class UpdateEnvironmentTemplateOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentTemplate" })
  environmentTemplate: EnvironmentTemplate;
}
