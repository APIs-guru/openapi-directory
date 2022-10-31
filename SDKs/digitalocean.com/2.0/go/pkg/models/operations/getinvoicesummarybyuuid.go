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
	Amount *string `json:"amount,omitempty"`
	Name   *string `json:"name,omitempty"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONOverages struct {
	Amount *string `json:"amount,omitempty"`
	Name   *string `json:"name,omitempty"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONProductChargesItems struct {
	Amount *string `json:"amount,omitempty"`
	Count  *string `json:"count,omitempty"`
	Name   *string `json:"name,omitempty"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONProductCharges struct {
	Amount *string                                                        `json:"amount,omitempty"`
	Items  []GetInvoiceSummaryByUUID200ApplicationJSONProductChargesItems `json:"items,omitempty"`
	Name   *string                                                        `json:"name,omitempty"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONTaxes struct {
	Amount *string `json:"amount,omitempty"`
	Name   *string `json:"name,omitempty"`
}

type GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress struct {
	AddressLine1    *string `json:"address_line1,omitempty"`
	AddressLine2    *string `json:"address_line2,omitempty"`
	City            *string `json:"city,omitempty"`
	CountryIso2Code *string `json:"country_iso2_code,omitempty"`
	CreatedAt       *string `json:"created_at,omitempty"`
	PostalCode      *string `json:"postal_code,omitempty"`
	Region          *string `json:"region,omitempty"`
	UpdatedAt       *string `json:"updated_at,omitempty"`
}

type GetInvoiceSummaryByUUID200ApplicationJSON struct {
	Amount                *string                                                         `json:"amount,omitempty"`
	BillingPeriod         *string                                                         `json:"billing_period,omitempty"`
	CreditsAndAdjustments *GetInvoiceSummaryByUUID200ApplicationJSONCreditsAndAdjustments `json:"credits_and_adjustments,omitempty"`
	InvoiceUUID           *string                                                         `json:"invoice_uuid,omitempty"`
	Overages              *GetInvoiceSummaryByUUID200ApplicationJSONOverages              `json:"overages,omitempty"`
	ProductCharges        *GetInvoiceSummaryByUUID200ApplicationJSONProductCharges        `json:"product_charges,omitempty"`
	Taxes                 *GetInvoiceSummaryByUUID200ApplicationJSONTaxes                 `json:"taxes,omitempty"`
	UserBillingAddress    *GetInvoiceSummaryByUUID200ApplicationJSONUserBillingAddress    `json:"user_billing_address,omitempty"`
	UserCompany           *string                                                         `json:"user_company,omitempty"`
	UserEmail             *string                                                         `json:"user_email,omitempty"`
	UserName              *string                                                         `json:"user_name,omitempty"`
}

type GetInvoiceSummaryByUUID401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetInvoiceSummaryByUUIDResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetInvoiceSummaryByUUID200ApplicationJSONObject           *GetInvoiceSummaryByUUID200ApplicationJSON
	GetInvoiceSummaryByUUID401ApplicationJSONObject           *GetInvoiceSummaryByUUID401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
