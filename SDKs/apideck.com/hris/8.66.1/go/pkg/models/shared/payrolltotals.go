package shared

type PayrollTotals struct {
	CheckAmount                  *float64 `json:"check_amount"`
	CompanyDebit                 *float64 `json:"company_debit"`
	EmployeeBenefitDeductions    *float64 `json:"employee_benefit_deductions"`
	EmployeeTaxes                *float64 `json:"employee_taxes"`
	EmployerBenefitContributions *float64 `json:"employer_benefit_contributions"`
	EmployerTaxes                *float64 `json:"employer_taxes"`
	GrossPay                     *float64 `json:"gross_pay"`
	NetPay                       *float64 `json:"net_pay"`
	TaxDebit                     *float64 `json:"tax_debit"`
}
