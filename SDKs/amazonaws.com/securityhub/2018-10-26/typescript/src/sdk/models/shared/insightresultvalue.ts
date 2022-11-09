import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InsightResultValue
/** 
 * The insight result values returned by the <code>GetInsightResults</code> operation.
**/
export class InsightResultValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count: number;

  @Metadata({ data: "json, name=GroupByAttributeValue" })
  groupByAttributeValue: string;
}
