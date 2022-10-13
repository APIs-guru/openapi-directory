package shared

import (
	"time"
)

type EntityReceiptDisbursementTotals struct {
	CumulativeCandidateDisbursements *float32   `json:"cumulative_candidate_disbursements"`
	CumulativeCandidateReceipts      *float32   `json:"cumulative_candidate_receipts"`
	CumulativePacDisbursements       *float32   `json:"cumulative_pac_disbursements"`
	CumulativePacReceipts            *float32   `json:"cumulative_pac_receipts"`
	CumulativePartyDisbursements     *float32   `json:"cumulative_party_disbursements"`
	CumulativePartyReceipts          *float32   `json:"cumulative_party_receipts"`
	Cycle                            *int32     `json:"cycle"`
	EndDate                          *time.Time `json:"end_date"`
}
