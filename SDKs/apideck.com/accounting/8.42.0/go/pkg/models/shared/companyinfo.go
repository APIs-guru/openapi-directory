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
	Addresses            []Address                                                     `json:"addresses"`
	AutomatedSalesTax    *bool                                                         `json:"automated_sales_tax"`
	CompanyName          *string                                                       `json:"company_name"`
	CompanyStartDate     *time.Time                                                    `json:"company_start_date"`
	Country              *string                                                       `json:"country"`
	CreatedAt            *time.Time                                                    `json:"created_at"`
	CreatedBy            *string                                                       `json:"created_by"`
	Currency             *CurrencyEnum                                                 `json:"currency"`
	DefaultSalesTax      *LinkedTaxRate                                                `json:"default_sales_tax"`
	Emails               []Email                                                       `json:"emails"`
	FiscalYearStartMonth *CompanyInfoFiscalYearStartMonthTheStartMonthOfFiscalYearEnum `json:"fiscal_year_start_month"`
	ID                   *string                                                       `json:"id"`
	Language             *string                                                       `json:"language"`
	LegalName            *string                                                       `json:"legal_name"`
	PhoneNumbers         []PhoneNumber                                                 `json:"phone_numbers"`
	RowVersion           *string                                                       `json:"row_version"`
	SalesTaxEnabled      *bool                                                         `json:"sales_tax_enabled"`
	SalesTaxNumber       *string                                                       `json:"sales_tax_number"`
	Status               *CompanyInfoStatusCompanyStatusEnum                           `json:"status"`
	UpdatedAt            *time.Time                                                    `json:"updated_at"`
	UpdatedBy            *string                                                       `json:"updated_by"`
}
