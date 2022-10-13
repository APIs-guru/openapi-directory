package shared

type OrderDetailsAPIModelStatusEnum string

const (
	OrderDetailsAPIModelStatusEnumPendingPayment OrderDetailsAPIModelStatusEnum = "PendingPayment"
	OrderDetailsAPIModelStatusEnumProcessing     OrderDetailsAPIModelStatusEnum = "Processing"
	OrderDetailsAPIModelStatusEnumShipped        OrderDetailsAPIModelStatusEnum = "Shipped"
	OrderDetailsAPIModelStatusEnumCompleted      OrderDetailsAPIModelStatusEnum = "Completed"
	OrderDetailsAPIModelStatusEnumOnHold         OrderDetailsAPIModelStatusEnum = "OnHold"
	OrderDetailsAPIModelStatusEnumCancelled      OrderDetailsAPIModelStatusEnum = "Cancelled"
	OrderDetailsAPIModelStatusEnumRefunded       OrderDetailsAPIModelStatusEnum = "Refunded"
	OrderDetailsAPIModelStatusEnumFailed         OrderDetailsAPIModelStatusEnum = "Failed"
)

type OrderDetailsAPIModel struct {
	AccessToken                *string                         `json:"AccessToken"`
	AfterPaymentDescription    *string                         `json:"AfterPaymentDescription"`
	CouponCode                 *string                         `json:"CouponCode"`
	Currency                   *CurrencyDetailsAPIModel        `json:"Currency"`
	CurrencyID                 *int32                          `json:"CurrencyId"`
	Description                *string                         `json:"Description"`
	DiscountAmount             *float64                        `json:"DiscountAmount"`
	ID                         *int32                          `json:"Id"`
	Name                       *string                         `json:"Name"`
	Note                       *string                         `json:"Note"`
	OrderBillingDetails        *OrderBillingDetailsAPIModel    `json:"OrderBillingDetails"`
	OrderShippingDetails       *OrderShippingDetailsAPIModel   `json:"OrderShippingDetails"`
	ProductID                  *int32                          `json:"ProductId"`
	Referral                   *string                         `json:"Referral"`
	ShippingAmount             *float64                        `json:"ShippingAmount"`
	ShippingDescription        *string                         `json:"ShippingDescription"`
	Status                     *OrderDetailsAPIModelStatusEnum `json:"Status"`
	SubTotalAmount             *float64                        `json:"SubTotalAmount"`
	TaxAmount                  *float64                        `json:"TaxAmount"`
	TotalAmount                *float64                        `json:"TotalAmount"`
	TotalWithShipping          *float64                        `json:"TotalWithShipping"`
	WhatHappensNextDescription *string                         `json:"WhatHappensNextDescription"`
}
