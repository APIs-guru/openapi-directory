import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowTemplateSummary } from "./flowtemplatesummary";



export class SearchFlowTemplatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: FlowTemplateSummary })
  summaries?: FlowTemplateSummary[];
}
