package shared

type DealServingMetadata struct {
	AlcoholAdsAllowed *bool                               `json:"alcoholAdsAllowed"`
	DealPauseStatus   *DealServingMetadataDealPauseStatus `json:"dealPauseStatus"`
}
