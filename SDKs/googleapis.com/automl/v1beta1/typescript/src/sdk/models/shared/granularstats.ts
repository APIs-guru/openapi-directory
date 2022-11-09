import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GranularStats
/** 
 * Stats split by a defined in context granularity.
**/
export class GranularStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets" })
  buckets?: Map<string, string>;
}
