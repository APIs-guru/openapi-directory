package shared

type EmployeePayrolls struct {
	Employee *Employee `json:"employee,omitempty"`
	Payrolls []Payroll `json:"payrolls,omitempty"`
}
