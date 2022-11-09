import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InsightResultValue } from "./insightresultvalue";


// InsightResults
/** 
 * The insight results returned by the <code>GetInsightResults</code> operation.
**/
export class InsightResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=GroupByAttribute" })
  groupByAttribute: string;

  @Metadata({ data: "json, name=InsightArn" })
  insightArn: string;

  @Metadata({ data: "json, name=ResultValues", elemType: shared.InsightResultValue })
  resultValues: InsightResultValue[];
}
