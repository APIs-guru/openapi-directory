import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileEvidence } from "./fileevidence";
import { OrderLineItems } from "./orderlineitems";


// AddEvidencePaymentDisputeRequest
/** 
 * This type is used by the request payload of the addEvidence method. The addEvidence method is used to create a new evidence set against a payment dispute with one or more evidence files.
**/
export class AddEvidencePaymentDisputeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceType" })
  evidenceType?: string;

  @Metadata({ data: "json, name=files", elemType: shared.FileEvidence })
  files?: FileEvidence[];

  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderLineItems })
  lineItems?: OrderLineItems[];
}
