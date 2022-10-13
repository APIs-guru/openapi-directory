package shared

type MigrateBasePlanPricesRequest struct {
	RegionalPriceMigrations []RegionalPriceMigrationConfig `json:"regionalPriceMigrations"`
	RegionsVersion          *RegionsVersion                `json:"regionsVersion"`
}
