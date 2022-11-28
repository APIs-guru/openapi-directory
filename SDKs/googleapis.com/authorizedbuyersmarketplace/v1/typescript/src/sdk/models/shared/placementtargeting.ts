import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MobileApplicationTargeting } from "./mobileapplicationtargeting";
import { UriTargeting } from "./uritargeting";



// PlacementTargeting
/** 
 * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
**/
export class PlacementTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mobileApplicationTargeting" })
  mobileApplicationTargeting?: MobileApplicationTargeting;

  @SpeakeasyMetadata({ data: "json, name=uriTargeting" })
  uriTargeting?: UriTargeting;
}
