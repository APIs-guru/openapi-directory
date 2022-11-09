import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WatchCreativeRequest
/** 
 * A request for watching changes to creative Status.
**/
export class WatchCreativeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
