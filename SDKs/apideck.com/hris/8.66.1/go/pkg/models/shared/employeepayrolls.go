package shared

type EmployeePayrolls struct {
	Employee *Employee `json:"employee"`
	Payrolls []Payroll `json:"payrolls"`
}
