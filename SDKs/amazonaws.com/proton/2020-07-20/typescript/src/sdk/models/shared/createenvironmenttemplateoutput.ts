import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplate } from "./environmenttemplate";



export class CreateEnvironmentTemplateOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentTemplate" })
  environmentTemplate: EnvironmentTemplate;
}
