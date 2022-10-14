package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum string

const (
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumAchFailure       ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "ACHFailure"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumAdjustment       ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "Adjustment"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumAttemptFailed    ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "AttemptFailed"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumChargeback       ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "Chargeback"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumCredit           ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "Credit"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumCreditExpiration ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "CreditExpiration"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumInvoice          ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "Invoice"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumPayment          ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "Payment"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumRefund           ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "Refund"
	ListBillingHistory200ApplicationJSONBillingHistoryTypeEnumReversal         ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum = "Reversal"
)

type ListBillingHistory200ApplicationJSONBillingHistory struct {
	Amount      *string                                                     `json:"amount,omitempty"`
	Date        *time.Time                                                  `json:"date,omitempty"`
	Description *string                                                     `json:"description,omitempty"`
	InvoiceID   *string                                                     `json:"invoice_id,omitempty"`
	InvoiceUUID *string                                                     `json:"invoice_uuid,omitempty"`
	Type        *ListBillingHistory200ApplicationJSONBillingHistoryTypeEnum `json:"type,omitempty"`
}

type ListBillingHistory200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last,omitempty"`
	Next *string `json:"next,omitempty"`
}

type ListBillingHistory200ApplicationJSONLinksPages2 struct {
	First *string `json:"first,omitempty"`
	Prev  *string `json:"prev,omitempty"`
}

type ListBillingHistory200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages,omitempty"`
}

type ListBillingHistory200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListBillingHistory200ApplicationJSON struct {
	BillingHistory []ListBillingHistory200ApplicationJSONBillingHistory `json:"billing_history"`
	Links          *ListBillingHistory200ApplicationJSONLinks           `json:"links,omitempty"`
	Meta           ListBillingHistory200ApplicationJSONMeta             `json:"meta"`
}

type ListBillingHistory401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type ListBillingHistoryResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListBillingHistory200ApplicationJSONObject                *ListBillingHistory200ApplicationJSON
	ListBillingHistory401ApplicationJSONObject                *ListBillingHistory401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
