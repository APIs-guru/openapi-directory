package shared

import (
	"time"
)

type InvoiceStatusEnum string

const (
	InvoiceStatusEnumDraft         InvoiceStatusEnum = "draft"
	InvoiceStatusEnumSubmitted     InvoiceStatusEnum = "submitted"
	InvoiceStatusEnumAuthorised    InvoiceStatusEnum = "authorised"
	InvoiceStatusEnumPartiallyPaid InvoiceStatusEnum = "partially_paid"
	InvoiceStatusEnumPaid          InvoiceStatusEnum = "paid"
	InvoiceStatusEnumVoid          InvoiceStatusEnum = "void"
	InvoiceStatusEnumCredit        InvoiceStatusEnum = "credit"
	InvoiceStatusEnumDeleted       InvoiceStatusEnum = "deleted"
)

type InvoiceInvoiceTypeEnum string

const (
	InvoiceInvoiceTypeEnumStandard InvoiceInvoiceTypeEnum = "standard"
	InvoiceInvoiceTypeEnumCredit   InvoiceInvoiceTypeEnum = "credit"
	InvoiceInvoiceTypeEnumService  InvoiceInvoiceTypeEnum = "service"
	InvoiceInvoiceTypeEnumProduct  InvoiceInvoiceTypeEnum = "product"
	InvoiceInvoiceTypeEnumSupplier InvoiceInvoiceTypeEnum = "supplier"
	InvoiceInvoiceTypeEnumOther    InvoiceInvoiceTypeEnum = "other"
)

type Invoice struct {
	Balance            *float64                `json:"balance,omitempty"`
	BillingAddress     *Address                `json:"billing_address,omitempty"`
	CreatedAt          *time.Time              `json:"created_at,omitempty"`
	CreatedBy          *string                 `json:"created_by,omitempty"`
	Currency           *CurrencyEnum           `json:"currency,omitempty"`
	CurrencyRate       *float64                `json:"currency_rate,omitempty"`
	Customer           *LinkedCustomer         `json:"customer,omitempty"`
	CustomerMemo       *string                 `json:"customer_memo,omitempty"`
	Deposit            *float64                `json:"deposit,omitempty"`
	DiscountPercentage *float64                `json:"discount_percentage,omitempty"`
	DownstreamID       *string                 `json:"downstream_id,omitempty"`
	DueDate            *time.Time              `json:"due_date,omitempty"`
	ID                 *string                 `json:"id,omitempty"`
	InvoiceDate        *time.Time              `json:"invoice_date,omitempty"`
	InvoiceSent        *bool                   `json:"invoice_sent,omitempty"`
	LineItems          []InvoiceLineItem       `json:"line_items,omitempty"`
	Number             *string                 `json:"number,omitempty"`
	PoNumber           *string                 `json:"po_number,omitempty"`
	Reference          *string                 `json:"reference,omitempty"`
	RowVersion         *string                 `json:"row_version,omitempty"`
	ShippingAddress    *Address                `json:"shipping_address,omitempty"`
	SourceDocumentURL  *string                 `json:"source_document_url,omitempty"`
	Status             *InvoiceStatusEnum      `json:"status,omitempty"`
	SubTotal           *float64                `json:"sub_total,omitempty"`
	TaxCode            *string                 `json:"tax_code,omitempty"`
	TaxInclusive       *bool                   `json:"tax_inclusive,omitempty"`
	TemplateID         *string                 `json:"template_id,omitempty"`
	Terms              *string                 `json:"terms,omitempty"`
	Total              *float64                `json:"total,omitempty"`
	TotalTax           *float64                `json:"total_tax,omitempty"`
	Type               *InvoiceInvoiceTypeEnum `json:"type,omitempty"`
	UpdatedAt          *time.Time              `json:"updated_at,omitempty"`
	UpdatedBy          *string                 `json:"updated_by,omitempty"`
}
