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

type CustomFieldRequestInput struct {
	CurrencyCode            *string                                    `json:"currency_code,omitempty"`
	CustomLabel             *string                                    `json:"custom_label,omitempty"`
	CustomLabelPosition     *CustomFieldRequestCustomLabelPositionEnum `json:"custom_label_position,omitempty"`
	Description             *string                                    `json:"description,omitempty"`
	Enabled                 *bool                                      `json:"enabled,omitempty"`
	EnumOptions             []EnumOptionInput                          `json:"enum_options,omitempty"`
	Format                  *CustomFieldRequestFormatEnum              `json:"format,omitempty"`
	HasNotificationsEnabled *bool                                      `json:"has_notifications_enabled,omitempty"`
	Name                    *string                                    `json:"name,omitempty"`
	NumberValue             *float64                                   `json:"number_value,omitempty"`
	Precision               *int64                                     `json:"precision,omitempty"`
	ResourceSubtype         *CustomFieldRequestResourceSubtypeEnum     `json:"resource_subtype,omitempty"`
	TextValue               *string                                    `json:"text_value,omitempty"`
	Workspace               string                                     `json:"workspace"`
}
