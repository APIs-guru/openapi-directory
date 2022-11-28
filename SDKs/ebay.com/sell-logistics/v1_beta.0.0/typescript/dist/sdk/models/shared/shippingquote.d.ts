import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { Rate } from "./rate";
import { Contact } from "./contact";
import { Error } from "./error";
/**
 * This complex type describes a &quot;shipping quote,&quot; which contains the parameters for a package shipment. The shipping quote contains a list of &quot;live quotes&quot; or rates for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller. Use the rateId value to select the specific service you want when you create a shipment by calling createFromShippingQuote.
**/
export declare class ShippingQuote extends SpeakeasyBase {
    creationDate?: string;
    expirationDate?: string;
    orders?: Order[];
    packageSpecification?: PackageSpecification;
    rates?: Rate[];
    shipFrom?: Contact;
    shipTo?: Contact;
    shippingQuoteId?: string;
    warnings?: Error[];
}
