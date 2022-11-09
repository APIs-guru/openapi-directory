import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileInfo } from "./fileinfo";
import { OrderLineItems } from "./orderlineitems";
import { TrackingInfo } from "./trackinginfo";


// DisputeEvidence
/** 
 * This type is used by the evidence array that is returned in the getPaymentDispute response if one or more evidential documents are associated with the payment dispute.
**/
export class DisputeEvidence extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceId" })
  evidenceId?: string;

  @Metadata({ data: "json, name=evidenceType" })
  evidenceType?: string;

  @Metadata({ data: "json, name=files", elemType: shared.FileInfo })
  files?: FileInfo[];

  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderLineItems })
  lineItems?: OrderLineItems[];

  @Metadata({ data: "json, name=providedDate" })
  providedDate?: string;

  @Metadata({ data: "json, name=requestDate" })
  requestDate?: string;

  @Metadata({ data: "json, name=respondByDate" })
  respondByDate?: string;

  @Metadata({ data: "json, name=shipmentTracking", elemType: shared.TrackingInfo })
  shipmentTracking?: TrackingInfo[];
}
