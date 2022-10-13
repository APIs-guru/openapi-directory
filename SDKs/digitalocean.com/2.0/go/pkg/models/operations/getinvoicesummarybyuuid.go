package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvoiceSummaryByUUIDPathParams struct {
	InvoiceUUID string `pathParam:"style=simple,explode=false,name=invoice_uuid"`
}

type GetInvoiceSummaryByUUIDRequest struct {
	PathParams GetInvoiceSummaryByUUIDPathParams
}

type GetInvoiceSummaryByUUID200ApplicationJSONCreditsAndAdjustments struct {
	Amount *string `json:"amount"`
	Name   *string `json:"name"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONOverages struct {
	Amount *string `json:"amount"`
	Name   *string `json:"name"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONProductChargesItems struct {
	Amount *string `json:"amount"`
	Count  *string `json:"count"`
	Name   *string `json:"name"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONProductCharges struct {
	Amount *string                                                        `json:"amount"`
	Items  []GetInvoiceSummaryByUUID200ApplicationJSONProductChargesItems `json:"items"`
	Name   *string                                                        `json:"name"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONTaxes struct {
	Amount *string `json:"amount"`
	Name   *string `json:"name"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress struct {
	AddressLine1    *string `json:"address_line1"`
	AddressLine2    *string `json:"address_line2"`
	City            *string `json:"city"`
	CountryIso2Code *string `json:"country_iso2_code"`
	CreatedAt       *string `json:"created_at"`
	PostalCode      *string `json:"postal_code"`
	Region          *string `json:"region"`
	UpdatedAt       *string `json:"updated_at"`
}

type GetInvoiceSummaryByUUID200ApplicationJSON struct {
	Amount                *string                                                         `json:"amount"`
	BillingPeriod         *string                                                         `json:"billing_period"`
	CreditsAndAdjustments *GetInvoiceSummaryByUUID200ApplicationJSONCreditsAndAdjustments `json:"credits_and_adjustments"`
	InvoiceUUID           *string                                                         `json:"invoice_uuid"`
	Overages              *GetInvoiceSummaryByUUID200ApplicationJSONOverages              `json:"overages"`
	ProductCharges        *GetInvoiceSummaryByUUID200ApplicationJSONProductCharges        `json:"product_charges"`
	Taxes                 *GetInvoiceSummaryByUUID200ApplicationJSONTaxes                 `json:"taxes"`
	UserBillingAddress    *GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress    `json:"user_billing_address"`
	UserCompany           *string                                                         `json:"user_company"`
	UserEmail             *string                                                         `json:"user_email"`
	UserName              *string                                                         `json:"user_name"`
}

type GetInvoiceSummaryByUUID401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type GetInvoiceSummaryByUUIDResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetInvoiceSummaryByUUID200ApplicationJSONObject           *GetInvoiceSummaryByUUID200ApplicationJSON
	GetInvoiceSummaryByUUID401ApplicationJSONObject           *GetInvoiceSummaryByUUID401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
