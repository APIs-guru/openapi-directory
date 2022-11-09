import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MobileApplicationTargeting } from "./mobileapplicationtargeting";
import { UriTargeting } from "./uritargeting";


// PlacementTargeting
/** 
 * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
**/
export class PlacementTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=mobileApplicationTargeting" })
  mobileApplicationTargeting?: MobileApplicationTargeting;

  @Metadata({ data: "json, name=uriTargeting" })
  uriTargeting?: UriTargeting;
}
