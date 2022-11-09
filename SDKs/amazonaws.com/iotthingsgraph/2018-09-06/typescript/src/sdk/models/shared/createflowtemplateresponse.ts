import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowTemplateSummary } from "./flowtemplatesummary";


export class CreateFlowTemplateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=summary" })
  summary?: FlowTemplateSummary;
}
