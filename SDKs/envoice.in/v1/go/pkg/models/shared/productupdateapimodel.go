package shared

type ProductUpdateAPIModelStatusEnum string

const (
	ProductUpdateAPIModelStatusEnumActive       ProductUpdateAPIModelStatusEnum = "Active"
	ProductUpdateAPIModelStatusEnumNotAvailable ProductUpdateAPIModelStatusEnum = "NotAvailable"
	ProductUpdateAPIModelStatusEnumInactive     ProductUpdateAPIModelStatusEnum = "Inactive"
)

type ProductUpdateAPIModel struct {
	AfterPaymentDescription    *string                          `json:"AfterPaymentDescription,omitempty"`
	Attachments                []ProductAttachmentAPIModel      `json:"Attachments,omitempty"`
	ButtonCallToAction         *string                          `json:"ButtonCallToAction,omitempty"`
	Coupons                    []ProductCouponAPIModel          `json:"Coupons,omitempty"`
	CurrencyID                 *int32                           `json:"CurrencyId,omitempty"`
	Description                *string                          `json:"Description,omitempty"`
	Discounts                  []ProductDiscountAPIModel        `json:"Discounts,omitempty"`
	ID                         *int32                           `json:"Id,omitempty"`
	IsFeatured                 *bool                            `json:"IsFeatured,omitempty"`
	Items                      []ProductItemAPIModel            `json:"Items,omitempty"`
	Name                       *string                          `json:"Name,omitempty"`
	PaymentGateways            []ProductGatewayAPIModel         `json:"PaymentGateways,omitempty"`
	ShippingAmount             *float64                         `json:"ShippingAmount,omitempty"`
	ShippingDescription        *string                          `json:"ShippingDescription,omitempty"`
	Status                     *ProductUpdateAPIModelStatusEnum `json:"Status,omitempty"`
	WhatHappensNextDescription *string                          `json:"WhatHappensNextDescription,omitempty"`
}
