package shared



type MarketplaceListingPlan struct {
    AccountsURL string `json:"accounts_url"`
    Bullets []string `json:"bullets"`
    Description string `json:"description"`
    HasFreeTrial bool `json:"has_free_trial"`
    ID int64 `json:"id"`
    MonthlyPriceInCents int64 `json:"monthly_price_in_cents"`
    Name string `json:"name"`
    Number int64 `json:"number"`
    PriceModel string `json:"price_model"`
    State string `json:"state"`
    UnitName string `json:"unit_name"`
    URL string `json:"url"`
    YearlyPriceInCents int64 `json:"yearly_price_in_cents"`
    
}

