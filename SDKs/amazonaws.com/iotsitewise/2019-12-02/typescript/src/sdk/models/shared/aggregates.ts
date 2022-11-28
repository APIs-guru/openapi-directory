import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Aggregates
/** 
 * Contains the (pre-calculated) aggregate values for an asset property.
**/
export class Aggregates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: number;

  @SpeakeasyMetadata({ data: "json, name=standardDeviation" })
  standardDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum?: number;
}
