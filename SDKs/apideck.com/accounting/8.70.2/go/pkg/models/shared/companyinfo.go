package shared

import (
	"time"
)

type CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum string

const (
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumJanuary   CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "January"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumFebruary  CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "February"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumMarch     CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "March"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumApril     CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "April"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumMay       CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "May"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumJune      CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "June"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumJuly      CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "July"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumAugust    CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "August"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumSeptember CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "September"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumOctober   CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "October"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumNovember  CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "November"
	CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnumDecember  CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum = "December"
)

type CompanyInfoStatusCompanyStatusEnum string

const (
	CompanyInfoStatusCompanyStatusEnumActive   CompanyInfoStatusCompanyStatusEnum = "active"
	CompanyInfoStatusCompanyStatusEnumInactive CompanyInfoStatusCompanyStatusEnum = "inactive"
)

type CompanyInfo struct {
	Addresses            []Address                                                     `json:"addresses,omitempty"`
	AutomatedSalesTax    *bool                                                         `json:"automated_sales_tax,omitempty"`
	CompanyName          *string                                                       `json:"company_name,omitempty"`
	CompanyStartDate     *time.Time                                                    `json:"company_start_date,omitempty"`
	Country              *string                                                       `json:"country,omitempty"`
	CreatedAt            *time.Time                                                    `json:"created_at,omitempty"`
	CreatedBy            *string                                                       `json:"created_by,omitempty"`
	Currency             *CurrencyEnum                                                 `json:"currency,omitempty"`
	DefaultSalesTax      *LinkedTaxRate                                                `json:"default_sales_tax,omitempty"`
	Emails               []Email                                                       `json:"emails,omitempty"`
	FiscalYearStartMonth *CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum `json:"fiscal_year_start_month,omitempty"`
	ID                   *string                                                       `json:"id,omitempty"`
	Language             *string                                                       `json:"language,omitempty"`
	LegalName            *string                                                       `json:"legal_name,omitempty"`
	PhoneNumbers         []PhoneNumber                                                 `json:"phone_numbers,omitempty"`
	RowVersion           *string                                                       `json:"row_version,omitempty"`
	SalesTaxEnabled      *bool                                                         `json:"sales_tax_enabled,omitempty"`
	SalesTaxNumber       *string                                                       `json:"sales_tax_number,omitempty"`
	Status               *CompanyInfoStatusCompanyStatusEnum                           `json:"status,omitempty"`
	UpdatedAt            *time.Time                                                    `json:"updated_at,omitempty"`
	UpdatedBy            *string                                                       `json:"updated_by,omitempty"`
}
