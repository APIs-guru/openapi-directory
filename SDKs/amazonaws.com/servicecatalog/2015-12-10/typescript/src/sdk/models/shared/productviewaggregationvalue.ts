import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProductViewAggregationValue
/** 
 * A single product view aggregation value/count pair, containing metadata about each product to which the calling user has access.
**/
export class ProductViewAggregationValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApproximateCount" })
  approximateCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
