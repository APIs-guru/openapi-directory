import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowTemplateSummary } from "./flowtemplatesummary";



export class UpdateFlowTemplateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: FlowTemplateSummary;
}
