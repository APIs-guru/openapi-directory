import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FileInfo } from "./fileinfo";
import { OrderLineItems } from "./orderlineitems";
import { TrackingInfo } from "./trackinginfo";



// DisputeEvidence
/** 
 * This type is used by the evidence array that is returned in the getPaymentDispute response if one or more evidential documents are associated with the payment dispute.
**/
export class DisputeEvidence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=evidenceId" })
  evidenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=evidenceType" })
  evidenceType?: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: FileInfo })
  files?: FileInfo[];

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: OrderLineItems })
  lineItems?: OrderLineItems[];

  @SpeakeasyMetadata({ data: "json, name=providedDate" })
  providedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=requestDate" })
  requestDate?: string;

  @SpeakeasyMetadata({ data: "json, name=respondByDate" })
  respondByDate?: string;

  @SpeakeasyMetadata({ data: "json, name=shipmentTracking", elemType: TrackingInfo })
  shipmentTracking?: TrackingInfo[];
}
