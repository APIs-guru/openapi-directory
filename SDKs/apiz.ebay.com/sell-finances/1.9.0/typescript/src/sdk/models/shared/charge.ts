import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";


// Charge
/** 
 * This type is used by the charge container, which is an array of one or more charges related to the transfer.
**/
export class Charge extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellationId" })
  cancellationId?: string;

  @Metadata({ data: "json, name=caseId" })
  caseId?: string;

  @Metadata({ data: "json, name=chargeNetAmount" })
  chargeNetAmount?: Amount;

  @Metadata({ data: "json, name=inquiryId" })
  inquiryId?: string;

  @Metadata({ data: "json, name=orderId" })
  orderId?: string;

  @Metadata({ data: "json, name=paymentDisputeId" })
  paymentDisputeId?: string;

  @Metadata({ data: "json, name=refundId" })
  refundId?: string;

  @Metadata({ data: "json, name=returnId" })
  returnId?: string;
}
