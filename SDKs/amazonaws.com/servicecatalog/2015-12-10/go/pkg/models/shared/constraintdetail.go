package shared

type ConstraintDetail struct {
	ConstraintID *string `json:"ConstraintId"`
	Description  *string `json:"Description"`
	Owner        *string `json:"Owner"`
	PortfolioID  *string `json:"PortfolioId"`
	ProductID    *string `json:"ProductId"`
	Type         *string `json:"Type"`
}
