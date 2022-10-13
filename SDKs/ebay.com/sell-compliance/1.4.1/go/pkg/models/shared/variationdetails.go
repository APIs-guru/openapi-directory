package shared

type VariationDetails struct {
	Sku              *string         `json:"sku"`
	VariationAspects []NameValueList `json:"variationAspects"`
}
