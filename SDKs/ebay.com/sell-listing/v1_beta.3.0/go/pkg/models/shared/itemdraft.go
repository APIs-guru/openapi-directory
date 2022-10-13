package shared

type ItemDraft struct {
	CategoryID     *string         `json:"categoryId"`
	Charity        *Charity        `json:"charity"`
	Condition      *string         `json:"condition"`
	Format         *string         `json:"format"`
	PricingSummary *PricingSummary `json:"pricingSummary"`
	Product        *Product        `json:"product"`
}
