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
	CurrencyCode            *string                                    `json:"currency_code"`
	CustomLabel             *string                                    `json:"custom_label"`
	CustomLabelPosition     *CustomFieldRequestCustomLabelPositionEnum `json:"custom_label_position"`
	Description             *string                                    `json:"description"`
	DisplayValue            *string                                    `json:"display_value"`
	Enabled                 *bool                                      `json:"enabled"`
	EnumOptions             []EnumOption                               `json:"enum_options"`
	Format                  *CustomFieldRequestFormatEnum              `json:"format"`
	Gid                     *string                                    `json:"gid"`
	HasNotificationsEnabled *bool                                      `json:"has_notifications_enabled"`
	IsGlobalToWorkspace     *bool                                      `json:"is_global_to_workspace"`
	Name                    *string                                    `json:"name"`
	NumberValue             *float64                                   `json:"number_value"`
	Precision               *int64                                     `json:"precision"`
	ResourceSubtype         *CustomFieldRequestResourceSubtypeEnum     `json:"resource_subtype"`
	ResourceType            *string                                    `json:"resource_type"`
	TextValue               *string                                    `json:"text_value"`
	Type                    *CustomFieldRequestTypeEnum                `json:"type"`
	Workspace               string                                     `json:"workspace"`
}
