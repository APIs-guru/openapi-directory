import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Barrier
/** 
 * Barrier runnable blocks until all tasks in a taskgroup reach it.
**/
export class Barrier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
