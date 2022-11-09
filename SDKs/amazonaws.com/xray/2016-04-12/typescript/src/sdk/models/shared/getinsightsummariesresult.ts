import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsightSummary } from "./insightsummary";


export class GetInsightSummariesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightSummaries", elemType: shared.InsightSummary })
  insightSummaries?: InsightSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
