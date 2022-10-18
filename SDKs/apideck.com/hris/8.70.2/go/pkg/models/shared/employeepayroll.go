package shared

type EmployeePayroll struct {
	Employee *Employee `json:"employee,omitempty"`
	Payroll  *Payroll  `json:"payroll,omitempty"`
}
