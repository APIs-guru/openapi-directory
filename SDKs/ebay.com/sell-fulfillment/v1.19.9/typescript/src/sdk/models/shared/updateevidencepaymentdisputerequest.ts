import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FileEvidence } from "./fileevidence";
import { OrderLineItems } from "./orderlineitems";


// UpdateEvidencePaymentDisputeRequest
/** 
 * This type is used by the request payload of the updateEvidence method. The updateEvidence method is used to update an existing evidence set against a payment dispute with one or more evidence files.
**/
export class UpdateEvidencePaymentDisputeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=evidenceId" })
  evidenceId?: string;

  @Metadata({ data: "json, name=evidenceType" })
  evidenceType?: string;

  @Metadata({ data: "json, name=files", elemType: shared.FileEvidence })
  files?: FileEvidence[];

  @Metadata({ data: "json, name=lineItems", elemType: shared.OrderLineItems })
  lineItems?: OrderLineItems[];
}
