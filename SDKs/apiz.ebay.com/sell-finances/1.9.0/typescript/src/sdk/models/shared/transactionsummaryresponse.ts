import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";
import { Amount } from "./amount";


// TransactionSummaryResponse
/** 
 * This type is the base response type of the getTransactionSummary method, and based on the filters that are used in the getTransactionSummary call URI, the response may include total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds.
**/
export class TransactionSummaryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustmentAmount" })
  adjustmentAmount?: Amount;

  @Metadata({ data: "json, name=adjustmentBookingEntry" })
  adjustmentBookingEntry?: string;

  @Metadata({ data: "json, name=adjustmentCount" })
  adjustmentCount?: number;

  @Metadata({ data: "json, name=balanceTransferAmount" })
  balanceTransferAmount?: Amount;

  @Metadata({ data: "json, name=balanceTransferBookingEntry" })
  balanceTransferBookingEntry?: string;

  @Metadata({ data: "json, name=balanceTransferCount" })
  balanceTransferCount?: number;

  @Metadata({ data: "json, name=creditAmount" })
  creditAmount?: Amount;

  @Metadata({ data: "json, name=creditBookingEntry" })
  creditBookingEntry?: string;

  @Metadata({ data: "json, name=creditCount" })
  creditCount?: number;

  @Metadata({ data: "json, name=disputeAmount" })
  disputeAmount?: Amount;

  @Metadata({ data: "json, name=disputeBookingEntry" })
  disputeBookingEntry?: string;

  @Metadata({ data: "json, name=disputeCount" })
  disputeCount?: number;

  @Metadata({ data: "json, name=nonSaleChargeAmount" })
  nonSaleChargeAmount?: Amount;

  @Metadata({ data: "json, name=nonSaleChargeBookingEntry" })
  nonSaleChargeBookingEntry?: string;

  @Metadata({ data: "json, name=nonSaleChargeCount" })
  nonSaleChargeCount?: number;

  @Metadata({ data: "json, name=onHoldAmount" })
  onHoldAmount?: Amount;

  @Metadata({ data: "json, name=onHoldBookingEntry" })
  onHoldBookingEntry?: string;

  @Metadata({ data: "json, name=onHoldCount" })
  onHoldCount?: number;

  @Metadata({ data: "json, name=refundAmount" })
  refundAmount?: Amount;

  @Metadata({ data: "json, name=refundBookingEntry" })
  refundBookingEntry?: string;

  @Metadata({ data: "json, name=refundCount" })
  refundCount?: number;

  @Metadata({ data: "json, name=shippingLabelAmount" })
  shippingLabelAmount?: Amount;

  @Metadata({ data: "json, name=shippingLabelBookingEntry" })
  shippingLabelBookingEntry?: string;

  @Metadata({ data: "json, name=shippingLabelCount" })
  shippingLabelCount?: number;

  @Metadata({ data: "json, name=transferAmount" })
  transferAmount?: Amount;

  @Metadata({ data: "json, name=transferBookingEntry" })
  transferBookingEntry?: string;

  @Metadata({ data: "json, name=transferCount" })
  transferCount?: number;
}
