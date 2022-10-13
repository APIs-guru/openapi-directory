package shared

import (
	"time"
)

type InvoiceStatusStatusEnum string

const (
	InvoiceStatusStatusEnumDraft         InvoiceStatusStatusEnum = "draft"
	InvoiceStatusStatusEnumSubmitted     InvoiceStatusStatusEnum = "submitted"
	InvoiceStatusStatusEnumAuthorised    InvoiceStatusStatusEnum = "authorised"
	InvoiceStatusStatusEnumPartiallyPaid InvoiceStatusStatusEnum = "partially_paid"
	InvoiceStatusStatusEnumPaid          InvoiceStatusStatusEnum = "paid"
	InvoiceStatusStatusEnumVoid          InvoiceStatusStatusEnum = "void"
	InvoiceStatusStatusEnumCredit        InvoiceStatusStatusEnum = "credit"
	InvoiceStatusStatusEnumDeleted       InvoiceStatusStatusEnum = "deleted"
)

type InvoiceTypeInvoiceTypeEnum string

const (
	InvoiceTypeInvoiceTypeEnumStandard InvoiceTypeInvoiceTypeEnum = "standard"
	InvoiceTypeInvoiceTypeEnumCredit   InvoiceTypeInvoiceTypeEnum = "credit"
	InvoiceTypeInvoiceTypeEnumService  InvoiceTypeInvoiceTypeEnum = "service"
	InvoiceTypeInvoiceTypeEnumProduct  InvoiceTypeInvoiceTypeEnum = "product"
	InvoiceTypeInvoiceTypeEnumSupplier InvoiceTypeInvoiceTypeEnum = "supplier"
	InvoiceTypeInvoiceTypeEnumOther    InvoiceTypeInvoiceTypeEnum = "other"
)

type Invoice struct {
	Balance           *float64                    `json:"balance"`
	BillingAddress    *Address                    `json:"billing_address"`
	CreatedAt         *time.Time                  `json:"created_at"`
	CreatedBy         *string                     `json:"created_by"`
	Currency          *CurrencyEnum               `json:"currency"`
	CurrencyRate      *float64                    `json:"currency_rate"`
	Customer          *LinkedCustomer             `json:"customer"`
	CustomerMemo      *string                     `json:"customer_memo"`
	Deposit           *float64                    `json:"deposit"`
	DownstreamID      *string                     `json:"downstream_id"`
	DueDate           *time.Time                  `json:"due_date"`
	ID                *string                     `json:"id"`
	InvoiceDate       *time.Time                  `json:"invoice_date"`
	InvoiceSent       *bool                       `json:"invoice_sent"`
	LineItems         []InvoiceLineItem           `json:"line_items"`
	Number            *string                     `json:"number"`
	PoNumber          *string                     `json:"po_number"`
	Reference         *string                     `json:"reference"`
	RowVersion        *string                     `json:"row_version"`
	ShippingAddress   *Address                    `json:"shipping_address"`
	SourceDocumentURL *string                     `json:"source_document_url"`
	Status            *InvoiceStatusStatusEnum    `json:"status"`
	SubTotal          *float64                    `json:"sub_total"`
	TaxCode           *string                     `json:"tax_code"`
	TaxInclusive      *bool                       `json:"tax_inclusive"`
	TemplateID        *string                     `json:"template_id"`
	Terms             *string                     `json:"terms"`
	Total             *float64                    `json:"total"`
	TotalTax          *float64                    `json:"total_tax"`
	Type              *InvoiceTypeInvoiceTypeEnum `json:"type"`
	UpdatedAt         *time.Time                  `json:"updated_at"`
	UpdatedBy         *string                     `json:"updated_by"`
}
