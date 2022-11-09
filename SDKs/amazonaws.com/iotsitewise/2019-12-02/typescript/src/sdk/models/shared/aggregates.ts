import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Aggregates
/** 
 * Contains the (pre-calculated) aggregate values for an asset property.
**/
export class Aggregates extends SpeakeasyBase {
  @Metadata({ data: "json, name=average" })
  average?: number;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=minimum" })
  minimum?: number;

  @Metadata({ data: "json, name=standardDeviation" })
  standardDeviation?: number;

  @Metadata({ data: "json, name=sum" })
  sum?: number;
}
