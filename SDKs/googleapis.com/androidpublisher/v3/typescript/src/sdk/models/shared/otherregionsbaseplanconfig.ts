import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";
import { Money } from "./money";


// OtherRegionsBasePlanConfig
/** 
 * Pricing information for any new locations Play may launch in.
**/
export class OtherRegionsBasePlanConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=eurPrice" })
  eurPrice?: Money;

  @Metadata({ data: "json, name=newSubscriberAvailability" })
  newSubscriberAvailability?: boolean;

  @Metadata({ data: "json, name=usdPrice" })
  usdPrice?: Money;
}
