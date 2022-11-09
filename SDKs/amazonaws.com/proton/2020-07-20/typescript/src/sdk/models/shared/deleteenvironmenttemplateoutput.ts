import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentTemplate } from "./environmenttemplate";


export class DeleteEnvironmentTemplateOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentTemplate" })
  environmentTemplate?: EnvironmentTemplate;
}
