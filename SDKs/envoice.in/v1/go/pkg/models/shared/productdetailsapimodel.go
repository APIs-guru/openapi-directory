package shared

type ProductDetailsAPIModelStatusEnum string

const (
	ProductDetailsAPIModelStatusEnumActive       ProductDetailsAPIModelStatusEnum = "Active"
	ProductDetailsAPIModelStatusEnumNotAvailable ProductDetailsAPIModelStatusEnum = "NotAvailable"
	ProductDetailsAPIModelStatusEnumInactive     ProductDetailsAPIModelStatusEnum = "Inactive"
)

type ProductDetailsAPIModel struct {
	AccessToken                *string                           `json:"AccessToken,omitempty"`
	AfterPaymentDescription    *string                           `json:"AfterPaymentDescription,omitempty"`
	ButtonCallToAction         *string                           `json:"ButtonCallToAction,omitempty"`
	Currency                   *CurrencyDetailsAPIModel          `json:"Currency,omitempty"`
	CurrencyID                 *int32                            `json:"CurrencyId,omitempty"`
	Description                *string                           `json:"Description,omitempty"`
	ID                         *int32                            `json:"Id,omitempty"`
	IsFeatured                 *bool                             `json:"IsFeatured,omitempty"`
	Name                       *string                           `json:"Name,omitempty"`
	ShippingAmount             *float64                          `json:"ShippingAmount,omitempty"`
	ShippingDescription        *string                           `json:"ShippingDescription,omitempty"`
	Status                     *ProductDetailsAPIModelStatusEnum `json:"Status,omitempty"`
	SubTotalAmount             *float64                          `json:"SubTotalAmount,omitempty"`
	TotalAmount                *float64                          `json:"TotalAmount,omitempty"`
	TotalWithShipping          *float64                          `json:"TotalWithShipping,omitempty"`
	WhatHappensNextDescription *string                           `json:"WhatHappensNextDescription,omitempty"`
}
