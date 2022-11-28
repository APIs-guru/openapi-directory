import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentTemplate } from "./environmenttemplate";



export class DeleteEnvironmentTemplateOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentTemplate" })
  environmentTemplate?: EnvironmentTemplate;
}
