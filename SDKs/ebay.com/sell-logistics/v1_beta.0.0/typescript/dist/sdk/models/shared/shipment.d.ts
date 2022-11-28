import { SpeakeasyBase } from "../../../internal/utils";
import { ShipmentCancellation } from "./shipmentcancellation";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { PurchasedRate } from "./purchasedrate";
import { Contact } from "./contact";
/**
 * This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
**/
export declare class Shipment extends SpeakeasyBase {
    cancellation?: ShipmentCancellation;
    creationDate?: string;
    labelCustomMessage?: string;
    labelDownloadUrl?: string;
    labelSize?: string;
    orders?: Order[];
    packageSpecification?: PackageSpecification;
    rate?: PurchasedRate;
    returnTo?: Contact;
    shipFrom?: Contact;
    shipTo?: Contact;
    shipmentId?: string;
    shipmentTrackingNumber?: string;
}
