import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WatchCreativeRequest
/** 
 * A request for watching changes to creative Status.
**/
export class WatchCreativeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
