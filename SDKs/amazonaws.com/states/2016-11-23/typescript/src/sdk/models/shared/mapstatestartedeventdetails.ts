import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MapStateStartedEventDetails
/** 
 * Details about a Map state that was started.
**/
export class MapStateStartedEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: number;
}
