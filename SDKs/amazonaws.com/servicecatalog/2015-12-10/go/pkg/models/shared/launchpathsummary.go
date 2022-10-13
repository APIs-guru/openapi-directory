package shared

type LaunchPathSummary struct {
	ConstraintSummaries []ConstraintSummary `json:"ConstraintSummaries"`
	ID                  *string             `json:"Id"`
	Name                *string             `json:"Name"`
	Tags                []Tag               `json:"Tags"`
}
