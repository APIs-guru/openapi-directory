package shared

type RegionalPriceMigrationConfig struct {
	OldestAllowedPriceVersionTime *string `json:"oldestAllowedPriceVersionTime"`
	RegionCode                    *string `json:"regionCode"`
}
