import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EntityReceiptDisbursementTotals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cumulative_candidate_disbursements" })
  cumulativeCandidateDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=cumulative_candidate_receipts" })
  cumulativeCandidateReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=cumulative_pac_disbursements" })
  cumulativePacDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=cumulative_pac_receipts" })
  cumulativePacReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=cumulative_party_disbursements" })
  cumulativePartyDisbursements?: number;

  @SpeakeasyMetadata({ data: "json, name=cumulative_party_receipts" })
  cumulativePartyReceipts?: number;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate?: Date;
}
