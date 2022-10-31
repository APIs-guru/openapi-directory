package shared



type Compensation struct {
    Benefits []Benefit `json:"benefits,omitempty"`
    Deductions []Deduction `json:"deductions,omitempty"`
    EmployeeID string `json:"employee_id"`
    GrossPay *float64 `json:"gross_pay,omitempty"`
    NetPay *float64 `json:"net_pay,omitempty"`
    Taxes []Tax `json:"taxes,omitempty"`
    
}

