import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Phone } from "./phone";


// ReturnAddress
/** 
 * This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
**/
export class ReturnAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=addressLine1" })
  addressLine1?: string;

  @Metadata({ data: "json, name=addressLine2" })
  addressLine2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=county" })
  county?: string;

  @Metadata({ data: "json, name=fullName" })
  fullName?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=primaryPhone" })
  primaryPhone?: Phone;

  @Metadata({ data: "json, name=stateOrProvince" })
  stateOrProvince?: string;
}
