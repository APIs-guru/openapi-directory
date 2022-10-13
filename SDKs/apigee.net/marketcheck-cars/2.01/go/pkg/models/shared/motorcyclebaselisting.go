package shared

type MotorcycleBaseListing struct {
	Build           *MotorcycleBuild  `json:"build"`
	Color           *string           `json:"color"`
	Dealer          *NestDealer       `json:"dealer"`
	Dist            *float64          `json:"dist"`
	DpURL           *string           `json:"dp_url"`
	FirstSeenAt     *int64            `json:"first_seen_at"`
	FirstSeenAtDate *string           `json:"first_seen_at_date"`
	Heading         *string           `json:"heading"`
	ID              *string           `json:"id"`
	InventoryType   *string           `json:"inventory_type"`
	LastSeenAt      *int64            `json:"last_seen_at"`
	LastSeenAtDate  *string           `json:"last_seen_at_date"`
	Media           *ListingNestMedia `json:"media"`
	Miles           *int64            `json:"miles"`
	Msrp            *int64            `json:"msrp"`
	Price           *int64            `json:"price"`
	ScrapedAt       *float64          `json:"scraped_at"`
	ScrapedAtDate   *string           `json:"scraped_at_date"`
	SellerType      *string           `json:"seller_type"`
	Source          *string           `json:"source"`
	StockNo         *string           `json:"stock_no"`
	Vin             *string           `json:"vin"`
}
