import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightResultValue } from "./insightresultvalue";



// InsightResults
/** 
 * The insight results returned by the <code>GetInsightResults</code> operation.
**/
export class InsightResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=GroupByAttribute" })
  groupByAttribute: string;

  @SpeakeasyMetadata({ data: "json, name=InsightArn" })
  insightArn: string;

  @SpeakeasyMetadata({ data: "json, name=ResultValues", elemType: InsightResultValue })
  resultValues: InsightResultValue[];
}
