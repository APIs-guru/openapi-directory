package shared

type Compensation struct {
	Benefits   []Benefit   `json:"benefits"`
	Deductions []Deduction `json:"deductions"`
	EmployeeID string      `json:"employee_id"`
	GrossPay   *float64    `json:"gross_pay"`
	NetPay     *float64    `json:"net_pay"`
	Taxes      []Tax       `json:"taxes"`
}
