package shared

// Exclusion
// This type returns a list of properties (and their associated values) that are excluded from requiring an ePID value (from the eBay Catalog) for items that are listed in the associated category.
type Exclusion struct {
	Brands []string `json:"brands,omitempty"`
}
