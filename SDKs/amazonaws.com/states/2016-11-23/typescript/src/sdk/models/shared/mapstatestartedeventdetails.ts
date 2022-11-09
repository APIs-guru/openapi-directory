import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MapStateStartedEventDetails
/** 
 * Details about a Map state that was started.
**/
export class MapStateStartedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=length" })
  length?: number;
}
