import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { Contact } from "./contact";
/**
 * This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
**/
export declare class ShippingQuoteRequest extends SpeakeasyBase {
    orders?: Order[];
    packageSpecification?: PackageSpecification;
    shipFrom?: Contact;
    shipTo?: Contact;
}
