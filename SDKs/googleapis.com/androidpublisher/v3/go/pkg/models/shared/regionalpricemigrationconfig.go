package shared

type RegionalPriceMigrationConfig struct {
	OldestAllowedPriceVersionTime *string `json:"oldestAllowedPriceVersionTime,omitempty"`
	RegionCode                    *string `json:"regionCode,omitempty"`
}
