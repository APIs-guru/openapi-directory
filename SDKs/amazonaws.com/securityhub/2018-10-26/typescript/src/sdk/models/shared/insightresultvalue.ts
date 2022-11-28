import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightResultValue
/** 
 * The insight result values returned by the <code>GetInsightResults</code> operation.
**/
export class InsightResultValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=GroupByAttributeValue" })
  groupByAttributeValue: string;
}
