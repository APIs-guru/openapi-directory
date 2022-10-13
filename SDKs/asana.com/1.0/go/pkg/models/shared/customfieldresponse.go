package shared

type CustomFieldResponseCustomLabelPositionEnum string

const (
	CustomFieldResponseCustomLabelPositionEnumPrefix CustomFieldResponseCustomLabelPositionEnum = "prefix"
	CustomFieldResponseCustomLabelPositionEnumSuffix CustomFieldResponseCustomLabelPositionEnum = "suffix"
)

type CustomFieldResponseEnumValue struct {
	Color        *string `json:"color"`
	Enabled      *bool   `json:"enabled"`
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type CustomFieldResponseFormatEnum string

const (
	CustomFieldResponseFormatEnumCurrency   CustomFieldResponseFormatEnum = "currency"
	CustomFieldResponseFormatEnumIdentifier CustomFieldResponseFormatEnum = "identifier"
	CustomFieldResponseFormatEnumPercentage CustomFieldResponseFormatEnum = "percentage"
	CustomFieldResponseFormatEnumCustom     CustomFieldResponseFormatEnum = "custom"
	CustomFieldResponseFormatEnumNone       CustomFieldResponseFormatEnum = "none"
)

type CustomFieldResponseResourceSubtypeEnum string

const (
	CustomFieldResponseResourceSubtypeEnumText      CustomFieldResponseResourceSubtypeEnum = "text"
	CustomFieldResponseResourceSubtypeEnumEnum      CustomFieldResponseResourceSubtypeEnum = "enum"
	CustomFieldResponseResourceSubtypeEnumMultiEnum CustomFieldResponseResourceSubtypeEnum = "multi_enum"
	CustomFieldResponseResourceSubtypeEnumNumber    CustomFieldResponseResourceSubtypeEnum = "number"
)

type CustomFieldResponseTypeEnum string

const (
	CustomFieldResponseTypeEnumText      CustomFieldResponseTypeEnum = "text"
	CustomFieldResponseTypeEnumEnum      CustomFieldResponseTypeEnum = "enum"
	CustomFieldResponseTypeEnumMultiEnum CustomFieldResponseTypeEnum = "multi_enum"
	CustomFieldResponseTypeEnumNumber    CustomFieldResponseTypeEnum = "number"
)

type CustomFieldResponse struct {
	CreatedBy               *UserCompact                                `json:"created_by"`
	CurrencyCode            *string                                     `json:"currency_code"`
	CustomLabel             *string                                     `json:"custom_label"`
	CustomLabelPosition     *CustomFieldResponseCustomLabelPositionEnum `json:"custom_label_position"`
	Description             *string                                     `json:"description"`
	DisplayValue            *string                                     `json:"display_value"`
	Enabled                 *bool                                       `json:"enabled"`
	EnumOptions             []EnumOption                                `json:"enum_options"`
	EnumValue               *CustomFieldResponseEnumValue               `json:"enum_value"`
	Format                  *CustomFieldResponseFormatEnum              `json:"format"`
	Gid                     *string                                     `json:"gid"`
	HasNotificationsEnabled *bool                                       `json:"has_notifications_enabled"`
	IsGlobalToWorkspace     *bool                                       `json:"is_global_to_workspace"`
	MultiEnumValues         []EnumOption                                `json:"multi_enum_values"`
	Name                    *string                                     `json:"name"`
	NumberValue             *float64                                    `json:"number_value"`
	Precision               *int64                                      `json:"precision"`
	ResourceSubtype         *CustomFieldResponseResourceSubtypeEnum     `json:"resource_subtype"`
	ResourceType            *string                                     `json:"resource_type"`
	TextValue               *string                                     `json:"text_value"`
	Type                    *CustomFieldResponseTypeEnum                `json:"type"`
}
