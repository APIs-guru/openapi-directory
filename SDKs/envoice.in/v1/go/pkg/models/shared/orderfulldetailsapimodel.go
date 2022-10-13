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
	AccessToken                *string                             `json:"AccessToken"`
	AfterPaymentDescription    *string                             `json:"AfterPaymentDescription"`
	Attachments                []OrderAttachmentAPIModel           `json:"Attachments"`
	CouponCode                 *string                             `json:"CouponCode"`
	Currency                   *CurrencyDetailsAPIModel            `json:"Currency"`
	CurrencyID                 *int32                              `json:"CurrencyId"`
	Description                *string                             `json:"Description"`
	DiscountAmount             *float64                            `json:"DiscountAmount"`
	ID                         *int32                              `json:"Id"`
	Items                      []OrderItemAPIModel                 `json:"Items"`
	Name                       *string                             `json:"Name"`
	Note                       *string                             `json:"Note"`
	OrderBillingDetails        *OrderBillingDetailsAPIModel        `json:"OrderBillingDetails"`
	OrderShippingDetails       *OrderShippingDetailsAPIModel       `json:"OrderShippingDetails"`
	ProductID                  *int32                              `json:"ProductId"`
	Referral                   *string                             `json:"Referral"`
	ShippingAmount             *float64                            `json:"ShippingAmount"`
	ShippingDescription        *string                             `json:"ShippingDescription"`
	Status                     *OrderFullDetailsAPIModelStatusEnum `json:"Status"`
	SubTotalAmount             *float64                            `json:"SubTotalAmount"`
	TaxAmount                  *float64                            `json:"TaxAmount"`
	TotalAmount                *float64                            `json:"TotalAmount"`
	TotalWithShipping          *float64                            `json:"TotalWithShipping"`
	WhatHappensNextDescription *string                             `json:"WhatHappensNextDescription"`
}
