package shared

type SupportedPropertyChildProperties struct {
	UnifiedProperty *SupportedProperty `json:"unified_property"`
}

type SupportedProperty struct {
	ChildProperties []SupportedPropertyChildProperties `json:"child_properties"`
	UnifiedProperty *string                            `json:"unified_property"`
}
