import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Place } from "./place";


// SearchForPositionResult
/** 
 * Specifies a single point of interest, or Place as a result of a search query obtained from a dataset configured in the place index resource.
**/
export class SearchForPositionResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Place" })
  place: Place;
}
