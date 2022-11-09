import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Place } from "./place";
/**
 * Specifies a single point of interest, or Place as a result of a search query obtained from a dataset configured in the place index resource.
**/
export declare class SearchForPositionResult extends SpeakeasyBase {
    place: Place;
}
