import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { Contact } from "./contact";
import { Contact } from "./contact";


// ShippingQuoteRequest
/** 
 * This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
**/
export class ShippingQuoteRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=orders", elemType: shared.Order })
  orders?: Order[];

  @Metadata({ data: "json, name=packageSpecification" })
  packageSpecification?: PackageSpecification;

  @Metadata({ data: "json, name=shipFrom" })
  shipFrom?: Contact;

  @Metadata({ data: "json, name=shipTo" })
  shipTo?: Contact;
}
