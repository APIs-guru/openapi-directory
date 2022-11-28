package shared

// ProductAdoptionPolicy
// This complex type returns a category ID and a flag that indicates whether or not items listed in that category require the declaration of an ePID value, which links the item to the eBay Catalog. The type also lists any items that are excepted from the requirement to included an ePID value.
type ProductAdoptionPolicy struct {
	CategoryID      *string    `json:"categoryId,omitempty"`
	CategoryTreeID  *string    `json:"categoryTreeId,omitempty"`
	Exclusion       *Exclusion `json:"exclusion,omitempty"`
	ProductRequired *bool      `json:"productRequired,omitempty"`
}
