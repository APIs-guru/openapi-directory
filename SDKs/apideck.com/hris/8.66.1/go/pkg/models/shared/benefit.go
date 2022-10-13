package shared

type Benefit struct {
	EmployeeDeduction    *float64 `json:"employee_deduction"`
	EmployerContribution *float64 `json:"employer_contribution"`
	Name                 *string  `json:"name"`
}
