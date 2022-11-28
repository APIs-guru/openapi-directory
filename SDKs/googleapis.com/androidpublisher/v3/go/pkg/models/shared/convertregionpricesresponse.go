package shared

// ConvertRegionPricesResponse
// Response message for ConvertRegionPrices.
type ConvertRegionPricesResponse struct {
	ConvertedOtherRegionsPrice *ConvertedOtherRegionsPrice     `json:"convertedOtherRegionsPrice,omitempty"`
	ConvertedRegionPrices      map[string]ConvertedRegionPrice `json:"convertedRegionPrices,omitempty"`
}
