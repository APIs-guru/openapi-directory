import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ShipmentCancellation } from "./shipmentcancellation";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
import { PurchasedRate } from "./purchasedrate";
import { Contact } from "./contact";
import { Contact } from "./contact";
import { Contact } from "./contact";


// Shipment
/** 
 * This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
**/
export class Shipment extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellation" })
  cancellation?: ShipmentCancellation;

  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=labelCustomMessage" })
  labelCustomMessage?: string;

  @Metadata({ data: "json, name=labelDownloadUrl" })
  labelDownloadUrl?: string;

  @Metadata({ data: "json, name=labelSize" })
  labelSize?: string;

  @Metadata({ data: "json, name=orders", elemType: shared.Order })
  orders?: Order[];

  @Metadata({ data: "json, name=packageSpecification" })
  packageSpecification?: PackageSpecification;

  @Metadata({ data: "json, name=rate" })
  rate?: PurchasedRate;

  @Metadata({ data: "json, name=returnTo" })
  returnTo?: Contact;

  @Metadata({ data: "json, name=shipFrom" })
  shipFrom?: Contact;

  @Metadata({ data: "json, name=shipTo" })
  shipTo?: Contact;

  @Metadata({ data: "json, name=shipmentId" })
  shipmentId?: string;

  @Metadata({ data: "json, name=shipmentTrackingNumber" })
  shipmentTrackingNumber?: string;
}
