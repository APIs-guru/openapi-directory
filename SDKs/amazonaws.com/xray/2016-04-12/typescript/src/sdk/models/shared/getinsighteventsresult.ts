import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsightEvent } from "./insightevent";


export class GetInsightEventsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightEvents", elemType: shared.InsightEvent })
  insightEvents?: InsightEvent[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
