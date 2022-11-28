import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Phone } from "./phone";



// ReturnAddress
/** 
 * This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
**/
export class ReturnAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=county" })
  county?: string;

  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=primaryPhone" })
  primaryPhone?: Phone;

  @SpeakeasyMetadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
