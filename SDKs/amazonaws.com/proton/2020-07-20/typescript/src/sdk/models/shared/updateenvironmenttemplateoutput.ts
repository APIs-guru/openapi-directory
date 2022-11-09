import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentTemplate } from "./environmenttemplate";


export class UpdateEnvironmentTemplateOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentTemplate" })
  environmentTemplate: EnvironmentTemplate;
}
