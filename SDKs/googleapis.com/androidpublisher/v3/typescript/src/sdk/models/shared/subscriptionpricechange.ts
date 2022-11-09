import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Price } from "./price";


// SubscriptionPriceChange
/** 
 * Contains the price change information for a subscription that can be used to control the user journey for the price change in the app. This can be in the form of seeking confirmation from the user or tailoring the experience for a successful conversion.
**/
export class SubscriptionPriceChange extends SpeakeasyBase {
  @Metadata({ data: "json, name=newPrice" })
  newPrice?: Price;

  @Metadata({ data: "json, name=state" })
  state?: number;
}
