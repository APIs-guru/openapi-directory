package shared

import (
	"time"
)

type CompanyInfoTheStartMonthOfFiscalYearEnum string

const (
	CompanyInfoTheStartMonthOfFiscalYearEnumJanuary   CompanyInfoTheStartMonthOfFiscalYearEnum = "January"
	CompanyInfoTheStartMonthOfFiscalYearEnumFebruary  CompanyInfoTheStartMonthOfFiscalYearEnum = "February"
	CompanyInfoTheStartMonthOfFiscalYearEnumMarch     CompanyInfoTheStartMonthOfFiscalYearEnum = "March"
	CompanyInfoTheStartMonthOfFiscalYearEnumApril     CompanyInfoTheStartMonthOfFiscalYearEnum = "April"
	CompanyInfoTheStartMonthOfFiscalYearEnumMay       CompanyInfoTheStartMonthOfFiscalYearEnum = "May"
	CompanyInfoTheStartMonthOfFiscalYearEnumJune      CompanyInfoTheStartMonthOfFiscalYearEnum = "June"
	CompanyInfoTheStartMonthOfFiscalYearEnumJuly      CompanyInfoTheStartMonthOfFiscalYearEnum = "July"
	CompanyInfoTheStartMonthOfFiscalYearEnumAugust    CompanyInfoTheStartMonthOfFiscalYearEnum = "August"
	CompanyInfoTheStartMonthOfFiscalYearEnumSeptember CompanyInfoTheStartMonthOfFiscalYearEnum = "September"
	CompanyInfoTheStartMonthOfFiscalYearEnumOctober   CompanyInfoTheStartMonthOfFiscalYearEnum = "October"
	CompanyInfoTheStartMonthOfFiscalYearEnumNovember  CompanyInfoTheStartMonthOfFiscalYearEnum = "November"
	CompanyInfoTheStartMonthOfFiscalYearEnumDecember  CompanyInfoTheStartMonthOfFiscalYearEnum = "December"
)

type CompanyInfoCompanyStatusEnum string

const (
	CompanyInfoCompanyStatusEnumActive   CompanyInfoCompanyStatusEnum = "active"
	CompanyInfoCompanyStatusEnumInactive CompanyInfoCompanyStatusEnum = "inactive"
)

type CompanyInfo struct {
	Addresses            []Address                                 `json:"addresses,omitempty"`
	AutomatedSalesTax    *bool                                     `json:"automated_sales_tax,omitempty"`
	CompanyName          *string                                   `json:"company_name,omitempty"`
	CompanyStartDate     *time.Time                                `json:"company_start_date,omitempty"`
	Country              *string                                   `json:"country,omitempty"`
	CreatedAt            *time.Time                                `json:"created_at,omitempty"`
	CreatedBy            *string                                   `json:"created_by,omitempty"`
	Currency             *CurrencyEnum                             `json:"currency,omitempty"`
	DefaultSalesTax      *LinkedTaxRate                            `json:"default_sales_tax,omitempty"`
	Emails               []Email                                   `json:"emails,omitempty"`
	FiscalYearStartMonth *CompanyInfoTheStartMonthOfFiscalYearEnum `json:"fiscal_year_start_month,omitempty"`
	ID                   *string                                   `json:"id,omitempty"`
	Language             *string                                   `json:"language,omitempty"`
	LegalName            *string                                   `json:"legal_name,omitempty"`
	PhoneNumbers         []PhoneNumber                             `json:"phone_numbers,omitempty"`
	RowVersion           *string                                   `json:"row_version,omitempty"`
	SalesTaxEnabled      *bool                                     `json:"sales_tax_enabled,omitempty"`
	SalesTaxNumber       *string                                   `json:"sales_tax_number,omitempty"`
	Status               *CompanyInfoCompanyStatusEnum             `json:"status,omitempty"`
	UpdatedAt            *time.Time                                `json:"updated_at,omitempty"`
	UpdatedBy            *string                                   `json:"updated_by,omitempty"`
}
