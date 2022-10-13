package shared

type ServiceChargeTypeEnum string

const (
	ServiceChargeTypeEnumAutoGratuity ServiceChargeTypeEnum = "auto_gratuity"
	ServiceChargeTypeEnumCustom       ServiceChargeTypeEnum = "custom"
)

type ServiceCharge struct {
	Active     *bool                  `json:"active"`
	Amount     *float64               `json:"amount"`
	Currency   *CurrencyEnum          `json:"currency"`
	ID         *string                `json:"id"`
	Name       *string                `json:"name"`
	Percentage *float64               `json:"percentage"`
	Type       *ServiceChargeTypeEnum `json:"type"`
}
