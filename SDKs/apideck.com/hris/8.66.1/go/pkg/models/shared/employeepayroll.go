package shared

type EmployeePayroll struct {
	Employee *Employee `json:"employee"`
	Payroll  *Payroll  `json:"payroll"`
}
