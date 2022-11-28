import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceTemplate } from "./servicetemplate";



export class DeleteServiceTemplateOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceTemplate" })
  serviceTemplate?: ServiceTemplate;
}
