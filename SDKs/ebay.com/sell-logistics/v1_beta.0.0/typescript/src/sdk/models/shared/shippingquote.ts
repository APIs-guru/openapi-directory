import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { Rate } from "./rate";
import { Contact } from "./contact";
import { Error } from "./error";



// ShippingQuote
/** 
 * This complex type describes a &quot;shipping quote,&quot; which contains the parameters for a package shipment. The shipping quote contains a list of &quot;live quotes&quot; or rates for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller. Use the rateId value to select the specific service you want when you create a shipment by calling createFromShippingQuote.
**/
export class ShippingQuote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: Order })
  orders?: Order[];

  @SpeakeasyMetadata({ data: "json, name=packageSpecification" })
  packageSpecification?: PackageSpecification;

  @SpeakeasyMetadata({ data: "json, name=rates", elemType: Rate })
  rates?: Rate[];

  @SpeakeasyMetadata({ data: "json, name=shipFrom" })
  shipFrom?: Contact;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: Contact;

  @SpeakeasyMetadata({ data: "json, name=shippingQuoteId" })
  shippingQuoteId?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: Error })
  warnings?: Error[];
}
