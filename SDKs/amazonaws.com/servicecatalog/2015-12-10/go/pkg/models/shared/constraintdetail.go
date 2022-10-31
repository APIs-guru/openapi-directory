package shared

type ConstraintDetail struct {
	ConstraintID *string `json:"ConstraintId,omitempty"`
	Description  *string `json:"Description,omitempty"`
	Owner        *string `json:"Owner,omitempty"`
	PortfolioID  *string `json:"PortfolioId,omitempty"`
	ProductID    *string `json:"ProductId,omitempty"`
	Type         *string `json:"Type,omitempty"`
}
