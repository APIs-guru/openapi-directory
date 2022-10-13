package shared

type AddPaymentMethodRequestTypeEnum string

const (
	AddPaymentMethodRequestTypeEnumCard AddPaymentMethodRequestTypeEnum = "Card"
)

type AddPaymentMethodRequest struct {
	MakeDefault *bool                           `json:"makeDefault"`
	Token       string                          `json:"token"`
	Type        AddPaymentMethodRequestTypeEnum `json:"type"`
}
