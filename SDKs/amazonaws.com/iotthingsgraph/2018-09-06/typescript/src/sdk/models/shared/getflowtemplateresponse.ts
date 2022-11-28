import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowTemplateDescription } from "./flowtemplatedescription";



export class GetFlowTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: FlowTemplateDescription;
}
