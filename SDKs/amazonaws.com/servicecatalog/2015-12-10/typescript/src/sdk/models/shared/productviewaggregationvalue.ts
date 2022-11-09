import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProductViewAggregationValue
/** 
 * A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.
**/
export class ProductViewAggregationValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApproximateCount" })
  approximateCount?: number;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
