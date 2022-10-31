package shared




type OrderDetailsAPIModelStatusEnum string

const (
    OrderDetailsAPIModelStatusEnumPendingPayment OrderDetailsAPIModelStatusEnum = "PendingPayment"
OrderDetailsAPIModelStatusEnumProcessing OrderDetailsAPIModelStatusEnum = "Processing"
OrderDetailsAPIModelStatusEnumShipped OrderDetailsAPIModelStatusEnum = "Shipped"
OrderDetailsAPIModelStatusEnumCompleted OrderDetailsAPIModelStatusEnum = "Completed"
OrderDetailsAPIModelStatusEnumOnHold OrderDetailsAPIModelStatusEnum = "OnHold"
OrderDetailsAPIModelStatusEnumCancelled OrderDetailsAPIModelStatusEnum = "Cancelled"
OrderDetailsAPIModelStatusEnumRefunded OrderDetailsAPIModelStatusEnum = "Refunded"
OrderDetailsAPIModelStatusEnumFailed OrderDetailsAPIModelStatusEnum = "Failed"
)


type OrderDetailsAPIModel struct {
    AccessToken *string `json:"AccessToken,omitempty"`
    AfterPaymentDescription *string `json:"AfterPaymentDescription,omitempty"`
    CouponCode *string `json:"CouponCode,omitempty"`
    Currency *CurrencyDetailsAPIModel `json:"Currency,omitempty"`
    CurrencyID *int32 `json:"CurrencyId,omitempty"`
    Description *string `json:"Description,omitempty"`
    DiscountAmount *float64 `json:"DiscountAmount,omitempty"`
    ID *int32 `json:"Id,omitempty"`
    Name *string `json:"Name,omitempty"`
    Note *string `json:"Note,omitempty"`
    OrderBillingDetails *OrderBillingDetailsAPIModel `json:"OrderBillingDetails,omitempty"`
    OrderShippingDetails *OrderShippingDetailsAPIModel `json:"OrderShippingDetails,omitempty"`
    ProductID *int32 `json:"ProductId,omitempty"`
    Referral *string `json:"Referral,omitempty"`
    ShippingAmount *float64 `json:"ShippingAmount,omitempty"`
    ShippingDescription *string `json:"ShippingDescription,omitempty"`
    Status *OrderDetailsAPIModelStatusEnum `json:"Status,omitempty"`
    SubTotalAmount *float64 `json:"SubTotalAmount,omitempty"`
    TaxAmount *float64 `json:"TaxAmount,omitempty"`
    TotalAmount *float64 `json:"TotalAmount,omitempty"`
    TotalWithShipping *float64 `json:"TotalWithShipping,omitempty"`
    WhatHappensNextDescription *string `json:"WhatHappensNextDescription,omitempty"`
    
}

