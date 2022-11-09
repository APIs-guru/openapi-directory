import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MobileApplicationTargeting } from "./mobileapplicationtargeting";
import { UrlTargeting } from "./urltargeting";


// PlacementTargeting
/** 
 * Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed.
**/
export class PlacementTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=mobileApplicationTargeting" })
  mobileApplicationTargeting?: MobileApplicationTargeting;

  @Metadata({ data: "json, name=urlTargeting" })
  urlTargeting?: UrlTargeting;
}
