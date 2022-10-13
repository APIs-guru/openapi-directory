package shared

type CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum string

const (
	CustomFieldSettingResponseCustomFieldCustomLabelPositionEnumPrefix CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum = "prefix"
	CustomFieldSettingResponseCustomFieldCustomLabelPositionEnumSuffix CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum = "suffix"
)

type CustomFieldSettingResponseCustomFieldEnumValue struct {
	Color        *string `json:"color"`
	Enabled      *bool   `json:"enabled"`
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type CustomFieldSettingResponseCustomFieldFormatEnum string

const (
	CustomFieldSettingResponseCustomFieldFormatEnumCurrency   CustomFieldSettingResponseCustomFieldFormatEnum = "currency"
	CustomFieldSettingResponseCustomFieldFormatEnumIdentifier CustomFieldSettingResponseCustomFieldFormatEnum = "identifier"
	CustomFieldSettingResponseCustomFieldFormatEnumPercentage CustomFieldSettingResponseCustomFieldFormatEnum = "percentage"
	CustomFieldSettingResponseCustomFieldFormatEnumCustom     CustomFieldSettingResponseCustomFieldFormatEnum = "custom"
	CustomFieldSettingResponseCustomFieldFormatEnumNone       CustomFieldSettingResponseCustomFieldFormatEnum = "none"
)

type CustomFieldSettingResponseCustomFieldResourceSubtypeEnum string

const (
	CustomFieldSettingResponseCustomFieldResourceSubtypeEnumText      CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = "text"
	CustomFieldSettingResponseCustomFieldResourceSubtypeEnumEnum      CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = "enum"
	CustomFieldSettingResponseCustomFieldResourceSubtypeEnumMultiEnum CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = "multi_enum"
	CustomFieldSettingResponseCustomFieldResourceSubtypeEnumNumber    CustomFieldSettingResponseCustomFieldResourceSubtypeEnum = "number"
)

type CustomFieldSettingResponseCustomFieldTypeEnum string

const (
	CustomFieldSettingResponseCustomFieldTypeEnumText      CustomFieldSettingResponseCustomFieldTypeEnum = "text"
	CustomFieldSettingResponseCustomFieldTypeEnumEnum      CustomFieldSettingResponseCustomFieldTypeEnum = "enum"
	CustomFieldSettingResponseCustomFieldTypeEnumMultiEnum CustomFieldSettingResponseCustomFieldTypeEnum = "multi_enum"
	CustomFieldSettingResponseCustomFieldTypeEnumNumber    CustomFieldSettingResponseCustomFieldTypeEnum = "number"
)

type CustomFieldSettingResponseCustomField struct {
	CreatedBy               *UserCompact                                                  `json:"created_by"`
	CurrencyCode            *string                                                       `json:"currency_code"`
	CustomLabel             *string                                                       `json:"custom_label"`
	CustomLabelPosition     *CustomFieldSettingResponseCustomFieldCustomLabelPositionEnum `json:"custom_label_position"`
	Description             *string                                                       `json:"description"`
	DisplayValue            *string                                                       `json:"display_value"`
	Enabled                 *bool                                                         `json:"enabled"`
	EnumOptions             []EnumOption                                                  `json:"enum_options"`
	EnumValue               *CustomFieldSettingResponseCustomFieldEnumValue               `json:"enum_value"`
	Format                  *CustomFieldSettingResponseCustomFieldFormatEnum              `json:"format"`
	Gid                     *string                                                       `json:"gid"`
	HasNotificationsEnabled *bool                                                         `json:"has_notifications_enabled"`
	IsGlobalToWorkspace     *bool                                                         `json:"is_global_to_workspace"`
	MultiEnumValues         []EnumOption                                                  `json:"multi_enum_values"`
	Name                    *string                                                       `json:"name"`
	NumberValue             *float64                                                      `json:"number_value"`
	Precision               *int64                                                        `json:"precision"`
	ResourceSubtype         *CustomFieldSettingResponseCustomFieldResourceSubtypeEnum     `json:"resource_subtype"`
	ResourceType            *string                                                       `json:"resource_type"`
	TextValue               *string                                                       `json:"text_value"`
	Type                    *CustomFieldSettingResponseCustomFieldTypeEnum                `json:"type"`
}

type CustomFieldSettingResponseParent struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type CustomFieldSettingResponseProject struct {
	Gid          *string `json:"gid"`
	Name         *string `json:"name"`
	ResourceType *string `json:"resource_type"`
}

type CustomFieldSettingResponse struct {
	CustomField  *CustomFieldSettingResponseCustomField `json:"custom_field"`
	Gid          *string                                `json:"gid"`
	IsImportant  *bool                                  `json:"is_important"`
	Parent       *CustomFieldSettingResponseParent      `json:"parent"`
	Project      *CustomFieldSettingResponseProject     `json:"project"`
	ResourceType *string                                `json:"resource_type"`
}
