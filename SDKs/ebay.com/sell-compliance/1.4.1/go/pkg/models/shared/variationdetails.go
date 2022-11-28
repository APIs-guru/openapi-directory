package shared

// VariationDetails
// This type is used to identify the product variation that has the listing violation.
type VariationDetails struct {
	Sku              *string         `json:"sku,omitempty"`
	VariationAspects []NameValueList `json:"variationAspects,omitempty"`
}
