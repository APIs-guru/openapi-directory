import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightSummary } from "./insightsummary";



export class GetInsightSummariesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightSummaries", elemType: InsightSummary })
  insightSummaries?: InsightSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
