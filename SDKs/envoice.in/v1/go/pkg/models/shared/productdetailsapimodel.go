package shared

type ProductDetailsAPIModelStatusEnum string

const (
	ProductDetailsAPIModelStatusEnumActive       ProductDetailsAPIModelStatusEnum = "Active"
	ProductDetailsAPIModelStatusEnumNotAvailable ProductDetailsAPIModelStatusEnum = "NotAvailable"
	ProductDetailsAPIModelStatusEnumInactive     ProductDetailsAPIModelStatusEnum = "Inactive"
)

type ProductDetailsAPIModel struct {
	AccessToken                *string                           `json:"AccessToken"`
	AfterPaymentDescription    *string                           `json:"AfterPaymentDescription"`
	ButtonCallToAction         *string                           `json:"ButtonCallToAction"`
	Currency                   *CurrencyDetailsAPIModel          `json:"Currency"`
	CurrencyID                 *int32                            `json:"CurrencyId"`
	Description                *string                           `json:"Description"`
	ID                         *int32                            `json:"Id"`
	IsFeatured                 *bool                             `json:"IsFeatured"`
	Name                       *string                           `json:"Name"`
	ShippingAmount             *float64                          `json:"ShippingAmount"`
	ShippingDescription        *string                           `json:"ShippingDescription"`
	Status                     *ProductDetailsAPIModelStatusEnum `json:"Status"`
	SubTotalAmount             *float64                          `json:"SubTotalAmount"`
	TotalAmount                *float64                          `json:"TotalAmount"`
	TotalWithShipping          *float64                          `json:"TotalWithShipping"`
	WhatHappensNextDescription *string                           `json:"WhatHappensNextDescription"`
}
