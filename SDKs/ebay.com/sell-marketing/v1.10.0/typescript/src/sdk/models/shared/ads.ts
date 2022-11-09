import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ad } from "./ad";


// Ads
/** 
 * This type defines the container for an array of ads.
**/
export class Ads extends SpeakeasyBase {
  @Metadata({ data: "json, name=ads", elemType: shared.Ad })
  ads?: Ad[];
}
