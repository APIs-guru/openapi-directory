package shared




type FinalizedDealDealServingStatusEnum string

const (
    FinalizedDealDealServingStatusEnumDealServingStatusUnspecified FinalizedDealDealServingStatusEnum = "DEAL_SERVING_STATUS_UNSPECIFIED"
FinalizedDealDealServingStatusEnumActive FinalizedDealDealServingStatusEnum = "ACTIVE"
FinalizedDealDealServingStatusEnumEnded FinalizedDealDealServingStatusEnum = "ENDED"
FinalizedDealDealServingStatusEnumPausedByBuyer FinalizedDealDealServingStatusEnum = "PAUSED_BY_BUYER"
FinalizedDealDealServingStatusEnumPausedBySeller FinalizedDealDealServingStatusEnum = "PAUSED_BY_SELLER"
)


type FinalizedDeal struct {
    Deal *Deal `json:"deal,omitempty"`
    DealPausingInfo *DealPausingInfo `json:"dealPausingInfo,omitempty"`
    DealServingStatus *FinalizedDealDealServingStatusEnum `json:"dealServingStatus,omitempty"`
    Name *string `json:"name,omitempty"`
    ReadyToServe *bool `json:"readyToServe,omitempty"`
    RtbMetrics *RtbMetrics `json:"rtbMetrics,omitempty"`
    
}

