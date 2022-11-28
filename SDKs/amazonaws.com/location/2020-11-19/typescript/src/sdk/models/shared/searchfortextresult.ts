import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Place } from "./place";



// SearchForTextResult
/** 
 * Contains relevant Places returned by calling <code>SearchPlaceIndexForText</code>.
**/
export class SearchForTextResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Place" })
  place: Place;
}
