package shared

type CustomFieldCompactResourceSubtypeEnum string

const (
	CustomFieldCompactResourceSubtypeEnumText      CustomFieldCompactResourceSubtypeEnum = "text"
	CustomFieldCompactResourceSubtypeEnumEnum      CustomFieldCompactResourceSubtypeEnum = "enum"
	CustomFieldCompactResourceSubtypeEnumMultiEnum CustomFieldCompactResourceSubtypeEnum = "multi_enum"
	CustomFieldCompactResourceSubtypeEnumNumber    CustomFieldCompactResourceSubtypeEnum = "number"
)

type CustomFieldCompactTypeEnum string

const (
	CustomFieldCompactTypeEnumText      CustomFieldCompactTypeEnum = "text"
	CustomFieldCompactTypeEnumEnum      CustomFieldCompactTypeEnum = "enum"
	CustomFieldCompactTypeEnumMultiEnum CustomFieldCompactTypeEnum = "multi_enum"
	CustomFieldCompactTypeEnumNumber    CustomFieldCompactTypeEnum = "number"
)

type CustomFieldCompact struct {
	DisplayValue    *string                                `json:"display_value,omitempty"`
	Enabled         *bool                                  `json:"enabled,omitempty"`
	EnumOptions     []EnumOption                           `json:"enum_options,omitempty"`
	Gid             *string                                `json:"gid,omitempty"`
	Name            *string                                `json:"name,omitempty"`
	NumberValue     *float64                               `json:"number_value,omitempty"`
	ResourceSubtype *CustomFieldCompactResourceSubtypeEnum `json:"resource_subtype,omitempty"`
	ResourceType    *string                                `json:"resource_type,omitempty"`
	TextValue       *string                                `json:"text_value,omitempty"`
	Type            *CustomFieldCompactTypeEnum            `json:"type,omitempty"`
}
