package shared

type OrderFullDetailsAPIModelStatusEnum string

const (
	OrderFullDetailsAPIModelStatusEnumPendingPayment OrderFullDetailsAPIModelStatusEnum = "PendingPayment"
	OrderFullDetailsAPIModelStatusEnumProcessing     OrderFullDetailsAPIModelStatusEnum = "Processing"
	OrderFullDetailsAPIModelStatusEnumShipped        OrderFullDetailsAPIModelStatusEnum = "Shipped"
	OrderFullDetailsAPIModelStatusEnumCompleted      OrderFullDetailsAPIModelStatusEnum = "Completed"
	OrderFullDetailsAPIModelStatusEnumOnHold         OrderFullDetailsAPIModelStatusEnum = "OnHold"
	OrderFullDetailsAPIModelStatusEnumCancelled      OrderFullDetailsAPIModelStatusEnum = "Cancelled"
	OrderFullDetailsAPIModelStatusEnumRefunded       OrderFullDetailsAPIModelStatusEnum = "Refunded"
	OrderFullDetailsAPIModelStatusEnumFailed         OrderFullDetailsAPIModelStatusEnum = "Failed"
)

type OrderFullDetailsAPIModel struct {
	AccessToken                *string                             `json:"AccessToken,omitempty"`
	AfterPaymentDescription    *string                             `json:"AfterPaymentDescription,omitempty"`
	Attachments                []OrderAttachmentAPIModel           `json:"Attachments,omitempty"`
	CouponCode                 *string                             `json:"CouponCode,omitempty"`
	Currency                   *CurrencyDetailsAPIModel            `json:"Currency,omitempty"`
	CurrencyID                 *int32                              `json:"CurrencyId,omitempty"`
	Description                *string                             `json:"Description,omitempty"`
	DiscountAmount             *float64                            `json:"DiscountAmount,omitempty"`
	ID                         *int32                              `json:"Id,omitempty"`
	Items                      []OrderItemAPIModel                 `json:"Items,omitempty"`
	Name                       *string                             `json:"Name,omitempty"`
	Note                       *string                             `json:"Note,omitempty"`
	OrderBillingDetails        *OrderBillingDetailsAPIModel        `json:"OrderBillingDetails,omitempty"`
	OrderShippingDetails       *OrderShippingDetailsAPIModel       `json:"OrderShippingDetails,omitempty"`
	ProductID                  *int32                              `json:"ProductId,omitempty"`
	Referral                   *string                             `json:"Referral,omitempty"`
	ShippingAmount             *float64                            `json:"ShippingAmount,omitempty"`
	ShippingDescription        *string                             `json:"ShippingDescription,omitempty"`
	Status                     *OrderFullDetailsAPIModelStatusEnum `json:"Status,omitempty"`
	SubTotalAmount             *float64                            `json:"SubTotalAmount,omitempty"`
	TaxAmount                  *float64                            `json:"TaxAmount,omitempty"`
	TotalAmount                *float64                            `json:"TotalAmount,omitempty"`
	TotalWithShipping          *float64                            `json:"TotalWithShipping,omitempty"`
	WhatHappensNextDescription *string                             `json:"WhatHappensNextDescription,omitempty"`
}
