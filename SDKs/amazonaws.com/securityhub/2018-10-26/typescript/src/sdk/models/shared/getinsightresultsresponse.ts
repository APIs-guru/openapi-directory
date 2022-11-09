import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InsightResults } from "./insightresults";


export class GetInsightResultsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InsightResults" })
  insightResults: InsightResults;
}
