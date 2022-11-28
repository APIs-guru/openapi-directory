import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { Contact } from "./contact";



// ShippingQuoteRequest
/** 
 * This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
**/
export class ShippingQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=orders", elemType: Order })
  orders?: Order[];

  @SpeakeasyMetadata({ data: "json, name=packageSpecification" })
  packageSpecification?: PackageSpecification;

  @SpeakeasyMetadata({ data: "json, name=shipFrom" })
  shipFrom?: Contact;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: Contact;
}
