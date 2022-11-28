import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InputParallelismUpdate
/** 
 * Provides updates to the parallelism count.
**/
export class InputParallelismUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CountUpdate" })
  countUpdate?: number;
}
