import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightEvent } from "./insightevent";



export class GetInsightEventsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightEvents", elemType: InsightEvent })
  insightEvents?: InsightEvent[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
