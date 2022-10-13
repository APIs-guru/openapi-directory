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
	DisplayValue    *string                                `json:"display_value"`
	Enabled         *bool                                  `json:"enabled"`
	EnumOptions     []EnumOption                           `json:"enum_options"`
	Gid             *string                                `json:"gid"`
	Name            *string                                `json:"name"`
	NumberValue     *float64                               `json:"number_value"`
	ResourceSubtype *CustomFieldCompactResourceSubtypeEnum `json:"resource_subtype"`
	ResourceType    *string                                `json:"resource_type"`
	TextValue       *string                                `json:"text_value"`
	Type            *CustomFieldCompactTypeEnum            `json:"type"`
}
