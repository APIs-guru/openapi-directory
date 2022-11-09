import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FlowTemplateSummary } from "./flowtemplatesummary";


export class GetFlowTemplateRevisionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=summaries", elemType: shared.FlowTemplateSummary })
  summaries?: FlowTemplateSummary[];
}
