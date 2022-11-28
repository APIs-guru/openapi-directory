import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// RegionalBasePlanConfig
/** 
 * Configuration for a base plan specific to a region.
**/
export class RegionalBasePlanConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newSubscriberAvailability" })
  newSubscriberAvailability?: boolean;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Money;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
