package shared

type ListConstraintsForPortfolioOutput struct {
	ConstraintDetails []ConstraintDetail `json:"ConstraintDetails,omitempty"`
	NextPageToken     *string            `json:"NextPageToken,omitempty"`
}
