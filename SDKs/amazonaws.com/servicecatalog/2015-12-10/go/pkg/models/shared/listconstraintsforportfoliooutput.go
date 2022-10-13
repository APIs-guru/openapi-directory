package shared

type ListConstraintsForPortfolioOutput struct {
	ConstraintDetails []ConstraintDetail `json:"ConstraintDetails"`
	NextPageToken     *string            `json:"NextPageToken"`
}
