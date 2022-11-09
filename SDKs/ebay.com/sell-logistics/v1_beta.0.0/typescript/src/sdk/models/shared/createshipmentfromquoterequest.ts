import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdditionalOption } from "./additionaloption";
import { Contact } from "./contact";


// CreateShipmentFromQuoteRequest
/** 
 * This complex type contains the request payload for the createFromShippingQuote method.
**/
export class CreateShipmentFromQuoteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalOptions", elemType: shared.AdditionalOption })
  additionalOptions?: AdditionalOption[];

  @Metadata({ data: "json, name=labelCustomMessage" })
  labelCustomMessage?: string;

  @Metadata({ data: "json, name=labelSize" })
  labelSize?: string;

  @Metadata({ data: "json, name=rateId" })
  rateId?: string;

  @Metadata({ data: "json, name=returnTo" })
  returnTo?: Contact;

  @Metadata({ data: "json, name=shippingQuoteId" })
  shippingQuoteId?: string;
}
