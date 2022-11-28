import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";



// OtherRegionsBasePlanConfig
/** 
 * Pricing information for any new locations Play may launch in.
**/
export class OtherRegionsBasePlanConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eurPrice" })
  eurPrice?: Money;

  @SpeakeasyMetadata({ data: "json, name=newSubscriberAvailability" })
  newSubscriberAvailability?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usdPrice" })
  usdPrice?: Money;
}
