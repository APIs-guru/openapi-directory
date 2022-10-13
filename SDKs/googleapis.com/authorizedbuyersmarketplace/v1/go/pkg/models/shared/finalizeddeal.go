package shared

type FinalizedDealDealServingStatusEnum string

const (
	FinalizedDealDealServingStatusEnumDealServingStatusUnspecified FinalizedDealDealServingStatusEnum = "DEAL_SERVING_STATUS_UNSPECIFIED"
	FinalizedDealDealServingStatusEnumActive                       FinalizedDealDealServingStatusEnum = "ACTIVE"
	FinalizedDealDealServingStatusEnumEnded                        FinalizedDealDealServingStatusEnum = "ENDED"
	FinalizedDealDealServingStatusEnumPausedByBuyer                FinalizedDealDealServingStatusEnum = "PAUSED_BY_BUYER"
	FinalizedDealDealServingStatusEnumPausedBySeller               FinalizedDealDealServingStatusEnum = "PAUSED_BY_SELLER"
)

type FinalizedDeal struct {
	Deal              *Deal                               `json:"deal"`
	DealPausingInfo   *DealPausingInfo                    `json:"dealPausingInfo"`
	DealServingStatus *FinalizedDealDealServingStatusEnum `json:"dealServingStatus"`
	Name              *string                             `json:"name"`
	ReadyToServe      *bool                               `json:"readyToServe"`
	RtbMetrics        *RtbMetrics                         `json:"rtbMetrics"`
}
