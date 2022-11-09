import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Place } from "./place";


// SearchForTextResult
/** 
 * Contains relevant Places returned by calling <code>SearchPlaceIndexForText</code>.
**/
export class SearchForTextResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Place" })
  place: Place;
}
