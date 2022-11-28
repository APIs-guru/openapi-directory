package shared

type FinalizedDealDealServingStatusEnum string

const (
	FinalizedDealDealServingStatusEnumDealServingStatusUnspecified FinalizedDealDealServingStatusEnum = "DEAL_SERVING_STATUS_UNSPECIFIED"
	FinalizedDealDealServingStatusEnumActive                       FinalizedDealDealServingStatusEnum = "ACTIVE"
	FinalizedDealDealServingStatusEnumEnded                        FinalizedDealDealServingStatusEnum = "ENDED"
	FinalizedDealDealServingStatusEnumPausedByBuyer                FinalizedDealDealServingStatusEnum = "PAUSED_BY_BUYER"
	FinalizedDealDealServingStatusEnumPausedBySeller               FinalizedDealDealServingStatusEnum = "PAUSED_BY_SELLER"
)

// FinalizedDeal
// A finalized deal is a snapshot of the deal when both buyer and seller accept the deal. The buyer or seller can update the deal after it's been finalized and renegotiate on the deal targeting, terms and other fields, while at the same time the finalized snapshot of the deal can still be retrieved using this API. The finalized deal contains a copy of the deal as it existed when most recently finalized, as well as fields related to deal serving such as pause/resume status, RTB metrics, and more.
type FinalizedDeal struct {
	Deal              *Deal                               `json:"deal,omitempty"`
	DealPausingInfo   *DealPausingInfo                    `json:"dealPausingInfo,omitempty"`
	DealServingStatus *FinalizedDealDealServingStatusEnum `json:"dealServingStatus,omitempty"`
	Name              *string                             `json:"name,omitempty"`
	ReadyToServe      *bool                               `json:"readyToServe,omitempty"`
	RtbMetrics        *RtbMetrics                         `json:"rtbMetrics,omitempty"`
}
