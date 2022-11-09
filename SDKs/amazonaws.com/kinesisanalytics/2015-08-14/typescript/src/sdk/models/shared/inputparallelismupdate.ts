import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InputParallelismUpdate
/** 
 * Provides updates to the parallelism count.
**/
export class InputParallelismUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=CountUpdate" })
  countUpdate?: number;
}
