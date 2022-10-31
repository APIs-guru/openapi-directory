package shared

import (
"time")


type InvoiceLineItemEntityTypeEnum string

const (
    InvoiceLineItemEntityTypeEnumInvoice InvoiceLineItemEntityTypeEnum = "invoice"
InvoiceLineItemEntityTypeEnumAdjustment InvoiceLineItemEntityTypeEnum = "adjustment"
InvoiceLineItemEntityTypeEnumUsageOverage InvoiceLineItemEntityTypeEnum = "usage_overage"
InvoiceLineItemEntityTypeEnumUserOverage InvoiceLineItemEntityTypeEnum = "user_overage"
InvoiceLineItemEntityTypeEnumAddonSubscription InvoiceLineItemEntityTypeEnum = "addon_subscription"
InvoiceLineItemEntityTypeEnumMiscFee InvoiceLineItemEntityTypeEnum = "misc_fee"
)


type InvoiceLineItemEntity struct {
    Amount *float64 `json:"amount,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Description *string `json:"description,omitempty"`
    Plan *string `json:"plan,omitempty"`
    ServiceEndAt *time.Time `json:"service_end_at,omitempty"`
    ServiceStartAt *time.Time `json:"service_start_at,omitempty"`
    Site *string `json:"site,omitempty"`
    Type *InvoiceLineItemEntityTypeEnum `json:"type,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    
}

