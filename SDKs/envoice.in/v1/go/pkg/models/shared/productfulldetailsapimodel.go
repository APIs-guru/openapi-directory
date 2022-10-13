package shared

type ProductFullDetailsAPIModelStatusEnum string

const (
	ProductFullDetailsAPIModelStatusEnumActive       ProductFullDetailsAPIModelStatusEnum = "Active"
	ProductFullDetailsAPIModelStatusEnumNotAvailable ProductFullDetailsAPIModelStatusEnum = "NotAvailable"
	ProductFullDetailsAPIModelStatusEnumInactive     ProductFullDetailsAPIModelStatusEnum = "Inactive"
)

type ProductFullDetailsAPIModel struct {
	AccessToken                *string                               `json:"AccessToken"`
	AfterPaymentDescription    *string                               `json:"AfterPaymentDescription"`
	Attachments                []ProductAttachmentAPIModel           `json:"Attachments"`
	ButtonCallToAction         *string                               `json:"ButtonCallToAction"`
	Coupons                    []ProductCouponAPIModel               `json:"Coupons"`
	Currency                   *CurrencyDetailsAPIModel              `json:"Currency"`
	CurrencyID                 *int32                                `json:"CurrencyId"`
	Description                *string                               `json:"Description"`
	Discounts                  []ProductDiscountAPIModel             `json:"Discounts"`
	ID                         *int32                                `json:"Id"`
	IsFeatured                 *bool                                 `json:"IsFeatured"`
	Items                      []ProductItemAPIModel                 `json:"Items"`
	Name                       *string                               `json:"Name"`
	PaymentGateways            []ProductGatewayAPIModel              `json:"PaymentGateways"`
	ShippingAmount             *float64                              `json:"ShippingAmount"`
	ShippingDescription        *string                               `json:"ShippingDescription"`
	Status                     *ProductFullDetailsAPIModelStatusEnum `json:"Status"`
	SubTotalAmount             *float64                              `json:"SubTotalAmount"`
	TotalAmount                *float64                              `json:"TotalAmount"`
	TotalWithShipping          *float64                              `json:"TotalWithShipping"`
	WhatHappensNextDescription *string                               `json:"WhatHappensNextDescription"`
}
