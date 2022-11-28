import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ShipmentCancellation } from "./shipmentcancellation";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { PurchasedRate } from "./purchasedrate";
import { Contact } from "./contact";



// Shipment
/** 
 * This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
**/
export class Shipment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellation" })
  cancellation?: ShipmentCancellation;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=labelCustomMessage" })
  labelCustomMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=labelDownloadUrl" })
  labelDownloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=labelSize" })
  labelSize?: string;

  @SpeakeasyMetadata({ data: "json, name=orders", elemType: Order })
  orders?: Order[];

  @SpeakeasyMetadata({ data: "json, name=packageSpecification" })
  packageSpecification?: PackageSpecification;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: PurchasedRate;

  @SpeakeasyMetadata({ data: "json, name=returnTo" })
  returnTo?: Contact;

  @SpeakeasyMetadata({ data: "json, name=shipFrom" })
  shipFrom?: Contact;

  @SpeakeasyMetadata({ data: "json, name=shipTo" })
  shipTo?: Contact;

  @SpeakeasyMetadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentTrackingNumber" })
  shipmentTrackingNumber?: string;
}
