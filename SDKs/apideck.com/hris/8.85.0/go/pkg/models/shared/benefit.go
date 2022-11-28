package shared

type Benefit struct {
	EmployeeDeduction    *float64 `json:"employee_deduction,omitempty"`
	EmployerContribution *float64 `json:"employer_contribution,omitempty"`
	Name                 *string  `json:"name,omitempty"`
}
