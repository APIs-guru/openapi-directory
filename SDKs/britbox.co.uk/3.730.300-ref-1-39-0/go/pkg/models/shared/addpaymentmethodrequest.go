package shared

type AddPaymentMethodRequestTypeEnum string

const (
	AddPaymentMethodRequestTypeEnumCard AddPaymentMethodRequestTypeEnum = "Card"
)

type AddPaymentMethodRequest struct {
	MakeDefault *bool                           `json:"makeDefault,omitempty"`
	Token       string                          `json:"token"`
	Type        AddPaymentMethodRequestTypeEnum `json:"type"`
}
