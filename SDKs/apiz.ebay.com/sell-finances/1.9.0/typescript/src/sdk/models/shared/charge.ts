import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// Charge
/** 
 * This type is used by the charge container, which is an array of one or more charges related to the transfer.
**/
export class Charge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationId" })
  cancellationId?: string;

  @SpeakeasyMetadata({ data: "json, name=caseId" })
  caseId?: string;

  @SpeakeasyMetadata({ data: "json, name=chargeNetAmount" })
  chargeNetAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=inquiryId" })
  inquiryId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderId" })
  orderId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentDisputeId" })
  paymentDisputeId?: string;

  @SpeakeasyMetadata({ data: "json, name=refundId" })
  refundId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnId" })
  returnId?: string;
}
