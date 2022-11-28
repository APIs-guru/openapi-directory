import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowTemplateSummary } from "./flowtemplatesummary";



export class CreateFlowTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: FlowTemplateSummary;
}
