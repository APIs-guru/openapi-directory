package shared

import (
	"time"
)

type InvoiceLineItemEntityTypeEnum string

const (
	InvoiceLineItemEntityTypeEnumInvoice           InvoiceLineItemEntityTypeEnum = "invoice"
	InvoiceLineItemEntityTypeEnumAdjustment        InvoiceLineItemEntityTypeEnum = "adjustment"
	InvoiceLineItemEntityTypeEnumUsageOverage      InvoiceLineItemEntityTypeEnum = "usage_overage"
	InvoiceLineItemEntityTypeEnumUserOverage       InvoiceLineItemEntityTypeEnum = "user_overage"
	InvoiceLineItemEntityTypeEnumAddonSubscription InvoiceLineItemEntityTypeEnum = "addon_subscription"
	InvoiceLineItemEntityTypeEnumMiscFee           InvoiceLineItemEntityTypeEnum = "misc_fee"
)

type InvoiceLineItemEntity struct {
	Amount         *float64                       `json:"amount"`
	CreatedAt      *time.Time                     `json:"created_at"`
	Description    *string                        `json:"description"`
	Plan           *string                        `json:"plan"`
	ServiceEndAt   *time.Time                     `json:"service_end_at"`
	ServiceStartAt *time.Time                     `json:"service_start_at"`
	Site           *string                        `json:"site"`
	Type           *InvoiceLineItemEntityTypeEnum `json:"type"`
	UpdatedAt      *time.Time                     `json:"updated_at"`
}
