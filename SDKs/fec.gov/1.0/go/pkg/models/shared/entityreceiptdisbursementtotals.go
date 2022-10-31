package shared

import (
"time")

type EntityReceiptDisbursementTotals struct {
    CumulativeCandidateDisbursements *float32 `json:"cumulative_candidate_disbursements,omitempty"`
    CumulativeCandidateReceipts *float32 `json:"cumulative_candidate_receipts,omitempty"`
    CumulativePacDisbursements *float32 `json:"cumulative_pac_disbursements,omitempty"`
    CumulativePacReceipts *float32 `json:"cumulative_pac_receipts,omitempty"`
    CumulativePartyDisbursements *float32 `json:"cumulative_party_disbursements,omitempty"`
    CumulativePartyReceipts *float32 `json:"cumulative_party_receipts,omitempty"`
    Cycle *int32 `json:"cycle,omitempty"`
    EndDate *time.Time `json:"end_date,omitempty"`
    
}

