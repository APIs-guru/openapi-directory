package shared

// MigrateBasePlanPricesRequest
// Request message for MigrateBasePlanPrices.
type MigrateBasePlanPricesRequest struct {
	RegionalPriceMigrations []RegionalPriceMigrationConfig `json:"regionalPriceMigrations,omitempty"`
	RegionsVersion          *RegionsVersion                `json:"regionsVersion,omitempty"`
}
