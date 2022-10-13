package shared

type ConvertRegionPricesResponse struct {
	ConvertedOtherRegionsPrice *ConvertedOtherRegionsPrice     `json:"convertedOtherRegionsPrice"`
	ConvertedRegionPrices      map[string]ConvertedRegionPrice `json:"convertedRegionPrices"`
}
