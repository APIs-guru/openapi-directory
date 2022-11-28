package shared

// RegionalPriceMigrationConfig
// Configuration for a price migration.
type RegionalPriceMigrationConfig struct {
	OldestAllowedPriceVersionTime *string `json:"oldestAllowedPriceVersionTime,omitempty"`
	RegionCode                    *string `json:"regionCode,omitempty"`
}
