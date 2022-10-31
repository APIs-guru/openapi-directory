package shared

type CustomFieldRequestCustomLabelPositionEnum string

const (
	CustomFieldRequestCustomLabelPositionEnumPrefix CustomFieldRequestCustomLabelPositionEnum = "prefix"
	CustomFieldRequestCustomLabelPositionEnumSuffix CustomFieldRequestCustomLabelPositionEnum = "suffix"
)

type CustomFieldRequestFormatEnum string

const (
	CustomFieldRequestFormatEnumCurrency   CustomFieldRequestFormatEnum = "currency"
	CustomFieldRequestFormatEnumIdentifier CustomFieldRequestFormatEnum = "identifier"
	CustomFieldRequestFormatEnumPercentage CustomFieldRequestFormatEnum = "percentage"
	CustomFieldRequestFormatEnumCustom     CustomFieldRequestFormatEnum = "custom"
	CustomFieldRequestFormatEnumNone       CustomFieldRequestFormatEnum = "none"
)

type CustomFieldRequestResourceSubtypeEnum string

const (
	CustomFieldRequestResourceSubtypeEnumText      CustomFieldRequestResourceSubtypeEnum = "text"
	CustomFieldRequestResourceSubtypeEnumEnum      CustomFieldRequestResourceSubtypeEnum = "enum"
	CustomFieldRequestResourceSubtypeEnumMultiEnum CustomFieldRequestResourceSubtypeEnum = "multi_enum"
	CustomFieldRequestResourceSubtypeEnumNumber    CustomFieldRequestResourceSubtypeEnum = "number"
)

type CustomFieldRequestTypeEnum string

const (
	CustomFieldRequestTypeEnumText      CustomFieldRequestTypeEnum = "text"
	CustomFieldRequestTypeEnumEnum      CustomFieldRequestTypeEnum = "enum"
	CustomFieldRequestTypeEnumMultiEnum CustomFieldRequestTypeEnum = "multi_enum"
	CustomFieldRequestTypeEnumNumber    CustomFieldRequestTypeEnum = "number"
)

type CustomFieldRequest struct {
	CurrencyCode            *string                                    `json:"currency_code,omitempty"`
	CustomLabel             *string                                    `json:"custom_label,omitempty"`
	CustomLabelPosition     *CustomFieldRequestCustomLabelPositionEnum `json:"custom_label_position,omitempty"`
	Description             *string                                    `json:"description,omitempty"`
	DisplayValue            *string                                    `json:"display_value,omitempty"`
	Enabled                 *bool                                      `json:"enabled,omitempty"`
	EnumOptions             []EnumOption                               `json:"enum_options,omitempty"`
	Format                  *CustomFieldRequestFormatEnum              `json:"format,omitempty"`
	Gid                     *string                                    `json:"gid,omitempty"`
	HasNotificationsEnabled *bool                                      `json:"has_notifications_enabled,omitempty"`
	IsGlobalToWorkspace     *bool                                      `json:"is_global_to_workspace,omitempty"`
	Name                    *string                                    `json:"name,omitempty"`
	NumberValue             *float64                                   `json:"number_value,omitempty"`
	Precision               *int64                                     `json:"precision,omitempty"`
	ResourceSubtype         *CustomFieldRequestResourceSubtypeEnum     `json:"resource_subtype,omitempty"`
	ResourceType            *string                                    `json:"resource_type,omitempty"`
	TextValue               *string                                    `json:"text_value,omitempty"`
	Type                    *CustomFieldRequestTypeEnum                `json:"type,omitempty"`
	Workspace               string                                     `json:"workspace"`
}
