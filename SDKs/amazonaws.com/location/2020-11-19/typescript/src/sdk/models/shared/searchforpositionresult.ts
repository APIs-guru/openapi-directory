import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Place } from "./place";



// SearchForPositionResult
/** 
 * Specifies a single point of interest, or Place as a result of a search query obtained from a dataset configured in the place index resource.
**/
export class SearchForPositionResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Place" })
  place: Place;
}
