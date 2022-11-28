import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ad } from "./ad";



// Ads
/** 
 * This type defines the container for an array of ads.
**/
export class Ads extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ads", elemType: Ad })
  ads?: Ad[];
}
