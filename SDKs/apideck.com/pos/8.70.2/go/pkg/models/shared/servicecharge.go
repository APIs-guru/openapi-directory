package shared

type ServiceChargeTypeEnum string

const (
	ServiceChargeTypeEnumAutoGratuity ServiceChargeTypeEnum = "auto_gratuity"
	ServiceChargeTypeEnumCustom       ServiceChargeTypeEnum = "custom"
)

type ServiceCharge struct {
	Active     *bool                  `json:"active,omitempty"`
	Amount     *float64               `json:"amount,omitempty"`
	Currency   *CurrencyEnum          `json:"currency,omitempty"`
	ID         *string                `json:"id,omitempty"`
	Name       *string                `json:"name,omitempty"`
	Percentage *float64               `json:"percentage,omitempty"`
	Type       *ServiceChargeTypeEnum `json:"type,omitempty"`
}
