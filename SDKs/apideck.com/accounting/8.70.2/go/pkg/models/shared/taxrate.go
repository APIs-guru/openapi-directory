package shared

import (
	"time"
)

type TaxRateStatusTaxRateStatusEnum string

const (
	TaxRateStatusTaxRateStatusEnumActive   TaxRateStatusTaxRateStatusEnum = "active"
	TaxRateStatusTaxRateStatusEnumInactive TaxRateStatusTaxRateStatusEnum = "inactive"
	TaxRateStatusTaxRateStatusEnumArchived TaxRateStatusTaxRateStatusEnum = "archived"
)

type TaxRate struct {
	Code                 *string                         `json:"code,omitempty"`
	Components           []interface{}                   `json:"components,omitempty"`
	CreatedAt            *time.Time                      `json:"created_at,omitempty"`
	CreatedBy            *string                         `json:"created_by,omitempty"`
	Description          *string                         `json:"description,omitempty"`
	EffectiveTaxRate     *float64                        `json:"effective_tax_rate,omitempty"`
	ID                   *string                         `json:"id,omitempty"`
	Name                 *string                         `json:"name,omitempty"`
	OriginalTaxRateID    *string                         `json:"original_tax_rate_id,omitempty"`
	ReportTaxType        *string                         `json:"report_tax_type,omitempty"`
	RowVersion           *string                         `json:"row_version,omitempty"`
	Status               *TaxRateStatusTaxRateStatusEnum `json:"status,omitempty"`
	TaxPayableAccountID  *string                         `json:"tax_payable_account_id,omitempty"`
	TaxRemittedAccountID *string                         `json:"tax_remitted_account_id,omitempty"`
	TotalTaxRate         *float64                        `json:"total_tax_rate,omitempty"`
	Type                 *string                         `json:"type,omitempty"`
	UpdatedAt            *time.Time                      `json:"updated_at,omitempty"`
	UpdatedBy            *string                         `json:"updated_by,omitempty"`
}
