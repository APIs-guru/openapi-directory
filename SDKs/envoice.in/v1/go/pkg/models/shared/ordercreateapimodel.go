package shared

type OrderCreateAPIModelStatusEnum string

const (
	OrderCreateAPIModelStatusEnumPendingPayment OrderCreateAPIModelStatusEnum = "PendingPayment"
	OrderCreateAPIModelStatusEnumProcessing     OrderCreateAPIModelStatusEnum = "Processing"
	OrderCreateAPIModelStatusEnumShipped        OrderCreateAPIModelStatusEnum = "Shipped"
	OrderCreateAPIModelStatusEnumCompleted      OrderCreateAPIModelStatusEnum = "Completed"
	OrderCreateAPIModelStatusEnumOnHold         OrderCreateAPIModelStatusEnum = "OnHold"
	OrderCreateAPIModelStatusEnumCancelled      OrderCreateAPIModelStatusEnum = "Cancelled"
	OrderCreateAPIModelStatusEnumRefunded       OrderCreateAPIModelStatusEnum = "Refunded"
	OrderCreateAPIModelStatusEnumFailed         OrderCreateAPIModelStatusEnum = "Failed"
)

type OrderCreateAPIModel struct {
	AfterPaymentDescription    *string                        `json:"AfterPaymentDescription,omitempty"`
	Attachments                []OrderAttachmentAPIModel      `json:"Attachments,omitempty"`
	CouponCode                 *string                        `json:"CouponCode,omitempty"`
	CurrencyID                 *int32                         `json:"CurrencyId,omitempty"`
	Description                *string                        `json:"Description,omitempty"`
	DiscountAmount             *float64                       `json:"DiscountAmount,omitempty"`
	Items                      []OrderItemAPIModel            `json:"Items,omitempty"`
	Name                       *string                        `json:"Name,omitempty"`
	Note                       *string                        `json:"Note,omitempty"`
	OrderBillingDetails        *OrderBillingDetailsAPIModel   `json:"OrderBillingDetails,omitempty"`
	OrderShippingDetails       *OrderShippingDetailsAPIModel  `json:"OrderShippingDetails,omitempty"`
	ProductID                  *int32                         `json:"ProductId,omitempty"`
	Referral                   *string                        `json:"Referral,omitempty"`
	ShippingAmount             *float64                       `json:"ShippingAmount,omitempty"`
	ShippingDescription        *string                        `json:"ShippingDescription,omitempty"`
	Status                     *OrderCreateAPIModelStatusEnum `json:"Status,omitempty"`
	SubTotalAmount             *float64                       `json:"SubTotalAmount,omitempty"`
	TaxAmount                  *float64                       `json:"TaxAmount,omitempty"`
	TotalAmount                *float64                       `json:"TotalAmount,omitempty"`
	WhatHappensNextDescription *string                        `json:"WhatHappensNextDescription,omitempty"`
}
