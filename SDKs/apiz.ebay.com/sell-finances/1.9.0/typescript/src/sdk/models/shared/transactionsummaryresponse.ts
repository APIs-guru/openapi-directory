import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";



// TransactionSummaryResponse
/** 
 * This type is the base response type of the getTransactionSummary method, and based on the filters that are used in the getTransactionSummary call URI, the response may include total count and amount of the seller's sales and credits, total count and amount of buyer refunds, and total count and amount of seller payment holds.
**/
export class TransactionSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustmentAmount" })
  adjustmentAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=adjustmentBookingEntry" })
  adjustmentBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=adjustmentCount" })
  adjustmentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=balanceTransferAmount" })
  balanceTransferAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=balanceTransferBookingEntry" })
  balanceTransferBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=balanceTransferCount" })
  balanceTransferCount?: number;

  @SpeakeasyMetadata({ data: "json, name=creditAmount" })
  creditAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=creditBookingEntry" })
  creditBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=creditCount" })
  creditCount?: number;

  @SpeakeasyMetadata({ data: "json, name=disputeAmount" })
  disputeAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=disputeBookingEntry" })
  disputeBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=disputeCount" })
  disputeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=nonSaleChargeAmount" })
  nonSaleChargeAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=nonSaleChargeBookingEntry" })
  nonSaleChargeBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=nonSaleChargeCount" })
  nonSaleChargeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=onHoldAmount" })
  onHoldAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=onHoldBookingEntry" })
  onHoldBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=onHoldCount" })
  onHoldCount?: number;

  @SpeakeasyMetadata({ data: "json, name=refundAmount" })
  refundAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=refundBookingEntry" })
  refundBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=refundCount" })
  refundCount?: number;

  @SpeakeasyMetadata({ data: "json, name=shippingLabelAmount" })
  shippingLabelAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=shippingLabelBookingEntry" })
  shippingLabelBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingLabelCount" })
  shippingLabelCount?: number;

  @SpeakeasyMetadata({ data: "json, name=transferAmount" })
  transferAmount?: Amount;

  @SpeakeasyMetadata({ data: "json, name=transferBookingEntry" })
  transferBookingEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=transferCount" })
  transferCount?: number;
}
