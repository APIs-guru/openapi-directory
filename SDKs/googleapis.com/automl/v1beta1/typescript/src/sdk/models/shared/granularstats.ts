import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GranularStats
/** 
 * Stats split by a defined in context granularity.
**/
export class GranularStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets" })
  buckets?: Map<string, string>;
}
