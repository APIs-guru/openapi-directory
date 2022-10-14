package shared

type DealServingMetadata struct {
	AlcoholAdsAllowed *bool                               `json:"alcoholAdsAllowed,omitempty"`
	DealPauseStatus   *DealServingMetadataDealPauseStatus `json:"dealPauseStatus,omitempty"`
}
