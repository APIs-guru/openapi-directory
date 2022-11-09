import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowTemplateDescription } from "./flowtemplatedescription";


export class GetFlowTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: FlowTemplateDescription;
}
