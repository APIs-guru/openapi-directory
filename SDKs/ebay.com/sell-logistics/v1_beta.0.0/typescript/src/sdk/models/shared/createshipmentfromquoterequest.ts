import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdditionalOption } from "./additionaloption";
import { Contact } from "./contact";



// CreateShipmentFromQuoteRequest
/** 
 * This complex type contains the request payload for the createFromShippingQuote method.
**/
export class CreateShipmentFromQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalOptions", elemType: AdditionalOption })
  additionalOptions?: AdditionalOption[];

  @SpeakeasyMetadata({ data: "json, name=labelCustomMessage" })
  labelCustomMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=labelSize" })
  labelSize?: string;

  @SpeakeasyMetadata({ data: "json, name=rateId" })
  rateId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnTo" })
  returnTo?: Contact;

  @SpeakeasyMetadata({ data: "json, name=shippingQuoteId" })
  shippingQuoteId?: string;
}
