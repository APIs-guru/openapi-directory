import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";


// RegionalBasePlanConfig
/** 
 * Configuration for a base plan specific to a region.
**/
export class RegionalBasePlanConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=newSubscriberAvailability" })
  newSubscriberAvailability?: boolean;

  @Metadata({ data: "json, name=price" })
  price?: Money;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
