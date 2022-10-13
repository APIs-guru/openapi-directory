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
	Code                 *string                         `json:"code"`
	Components           []interface{}                   `json:"components"`
	CreatedAt            *time.Time                      `json:"created_at"`
	CreatedBy            *string                         `json:"created_by"`
	Description          *string                         `json:"description"`
	EffectiveTaxRate     *float64                        `json:"effective_tax_rate"`
	ID                   *string                         `json:"id"`
	Name                 *string                         `json:"name"`
	OriginalTaxRateID    *string                         `json:"original_tax_rate_id"`
	ReportTaxType        *string                         `json:"report_tax_type"`
	RowVersion           *string                         `json:"row_version"`
	Status               *TaxRateStatusTaxRateStatusEnum `json:"status"`
	TaxPayableAccountID  *string                         `json:"tax_payable_account_id"`
	TaxRemittedAccountID *string                         `json:"tax_remitted_account_id"`
	TotalTaxRate         *float64                        `json:"total_tax_rate"`
	Type                 *string                         `json:"type"`
	UpdatedAt            *time.Time                      `json:"updated_at"`
	UpdatedBy            *string                         `json:"updated_by"`
}
