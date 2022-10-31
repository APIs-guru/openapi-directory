package shared



type PayrollTotals struct {
    CheckAmount *float64 `json:"check_amount,omitempty"`
    CompanyDebit *float64 `json:"company_debit,omitempty"`
    EmployeeBenefitDeductions *float64 `json:"employee_benefit_deductions,omitempty"`
    EmployeeTaxes *float64 `json:"employee_taxes,omitempty"`
    EmployerBenefitContributions *float64 `json:"employer_benefit_contributions,omitempty"`
    EmployerTaxes *float64 `json:"employer_taxes,omitempty"`
    GrossPay *float64 `json:"gross_pay,omitempty"`
    NetPay *float64 `json:"net_pay,omitempty"`
    TaxDebit *float64 `json:"tax_debit,omitempty"`
    
}

