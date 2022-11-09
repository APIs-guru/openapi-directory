import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EntityReceiptDisbursementTotals extends SpeakeasyBase {
  @Metadata({ data: "json, name=cumulative_candidate_disbursements" })
  cumulativeCandidateDisbursements?: number;

  @Metadata({ data: "json, name=cumulative_candidate_receipts" })
  cumulativeCandidateReceipts?: number;

  @Metadata({ data: "json, name=cumulative_pac_disbursements" })
  cumulativePacDisbursements?: number;

  @Metadata({ data: "json, name=cumulative_pac_receipts" })
  cumulativePacReceipts?: number;

  @Metadata({ data: "json, name=cumulative_party_disbursements" })
  cumulativePartyDisbursements?: number;

  @Metadata({ data: "json, name=cumulative_party_receipts" })
  cumulativePartyReceipts?: number;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=end_date" })
  endDate?: Date;
}
