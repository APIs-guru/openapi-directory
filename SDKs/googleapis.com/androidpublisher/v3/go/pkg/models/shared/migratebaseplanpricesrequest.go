package shared

type MigrateBasePlanPricesRequest struct {
	RegionalPriceMigrations []RegionalPriceMigrationConfig `json:"regionalPriceMigrations,omitempty"`
	RegionsVersion          *RegionsVersion                `json:"regionsVersion,omitempty"`
}
