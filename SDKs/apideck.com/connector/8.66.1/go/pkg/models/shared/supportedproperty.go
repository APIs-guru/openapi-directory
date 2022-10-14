package shared

type SupportedPropertyChildProperties struct {
	UnifiedProperty *SupportedProperty `json:"unified_property,omitempty"`
}

type SupportedProperty struct {
	ChildProperties []SupportedPropertyChildProperties `json:"child_properties,omitempty"`
	UnifiedProperty *string                            `json:"unified_property,omitempty"`
}
