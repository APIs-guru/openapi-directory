package shared

type CustomFieldResponseCustomLabelPositionEnum string

const (
	CustomFieldResponseCustomLabelPositionEnumPrefix CustomFieldResponseCustomLabelPositionEnum = "prefix"
	CustomFieldResponseCustomLabelPositionEnumSuffix CustomFieldResponseCustomLabelPositionEnum = "suffix"
)

type CustomFieldResponseEnumValue struct {
	Color        *string `json:"color,omitempty"`
	Enabled      *bool   `json:"enabled,omitempty"`
	Gid          *string `json:"gid,omitempty"`
	Name         *string `json:"name,omitempty"`
	ResourceType *string `json:"resource_type,omitempty"`
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
	CreatedBy               *UserCompact                                `json:"created_by,omitempty"`
	CurrencyCode            *string                                     `json:"currency_code,omitempty"`
	CustomLabel             *string                                     `json:"custom_label,omitempty"`
	CustomLabelPosition     *CustomFieldResponseCustomLabelPositionEnum `json:"custom_label_position,omitempty"`
	Description             *string                                     `json:"description,omitempty"`
	DisplayValue            *string                                     `json:"display_value,omitempty"`
	Enabled                 *bool                                       `json:"enabled,omitempty"`
	EnumOptions             []EnumOption                                `json:"enum_options,omitempty"`
	EnumValue               *CustomFieldResponseEnumValue               `json:"enum_value,omitempty"`
	Format                  *CustomFieldResponseFormatEnum              `json:"format,omitempty"`
	Gid                     *string                                     `json:"gid,omitempty"`
	HasNotificationsEnabled *bool                                       `json:"has_notifications_enabled,omitempty"`
	IsGlobalToWorkspace     *bool                                       `json:"is_global_to_workspace,omitempty"`
	MultiEnumValues         []EnumOption                                `json:"multi_enum_values,omitempty"`
	Name                    *string                                     `json:"name,omitempty"`
	NumberValue             *float64                                    `json:"number_value,omitempty"`
	Precision               *int64                                      `json:"precision,omitempty"`
	ResourceSubtype         *CustomFieldResponseResourceSubtypeEnum     `json:"resource_subtype,omitempty"`
	ResourceType            *string                                     `json:"resource_type,omitempty"`
	TextValue               *string                                     `json:"text_value,omitempty"`
	Type                    *CustomFieldResponseTypeEnum                `json:"type,omitempty"`
}
