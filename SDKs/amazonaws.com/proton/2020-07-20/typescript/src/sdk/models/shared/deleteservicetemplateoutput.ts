import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceTemplate } from "./servicetemplate";


export class DeleteServiceTemplateOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceTemplate" })
  serviceTemplate?: ServiceTemplate;
}
