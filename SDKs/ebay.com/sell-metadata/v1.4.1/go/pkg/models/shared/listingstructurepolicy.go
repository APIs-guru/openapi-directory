package shared

type ListingStructurePolicy struct {
	CategoryID          *string `json:"categoryId"`
	CategoryTreeID      *string `json:"categoryTreeId"`
	VariationsSupported *bool   `json:"variationsSupported"`
}
