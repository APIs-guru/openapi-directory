package shared

// NameValueList
// This type is used to provide a name-value pair, including the identifying aspects of a product variation through the variationAspects container.
type NameValueList struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
