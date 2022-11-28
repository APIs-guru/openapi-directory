import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightResults } from "./insightresults";



export class GetInsightResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InsightResults" })
  insightResults: InsightResults;
}
