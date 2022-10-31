package shared




type ProductFullDetailsAPIModelStatusEnum string

const (
    ProductFullDetailsAPIModelStatusEnumActive ProductFullDetailsAPIModelStatusEnum = "Active"
ProductFullDetailsAPIModelStatusEnumNotAvailable ProductFullDetailsAPIModelStatusEnum = "NotAvailable"
ProductFullDetailsAPIModelStatusEnumInactive ProductFullDetailsAPIModelStatusEnum = "Inactive"
)


type ProductFullDetailsAPIModel struct {
    AccessToken *string `json:"AccessToken,omitempty"`
    AfterPaymentDescription *string `json:"AfterPaymentDescription,omitempty"`
    Attachments []ProductAttachmentAPIModel `json:"Attachments,omitempty"`
    ButtonCallToAction *string `json:"ButtonCallToAction,omitempty"`
    Coupons []ProductCouponAPIModel `json:"Coupons,omitempty"`
    Currency *CurrencyDetailsAPIModel `json:"Currency,omitempty"`
    CurrencyID *int32 `json:"CurrencyId,omitempty"`
    Description *string `json:"Description,omitempty"`
    Discounts []ProductDiscountAPIModel `json:"Discounts,omitempty"`
    ID *int32 `json:"Id,omitempty"`
    IsFeatured *bool `json:"IsFeatured,omitempty"`
    Items []ProductItemAPIModel `json:"Items,omitempty"`
    Name *string `json:"Name,omitempty"`
    PaymentGateways []ProductGatewayAPIModel `json:"PaymentGateways,omitempty"`
    ShippingAmount *float64 `json:"ShippingAmount,omitempty"`
    ShippingDescription *string `json:"ShippingDescription,omitempty"`
    Status *ProductFullDetailsAPIModelStatusEnum `json:"Status,omitempty"`
    SubTotalAmount *float64 `json:"SubTotalAmount,omitempty"`
    TotalAmount *float64 `json:"TotalAmount,omitempty"`
    TotalWithShipping *float64 `json:"TotalWithShipping,omitempty"`
    WhatHappensNextDescription *string `json:"WhatHappensNextDescription,omitempty"`
    
}

