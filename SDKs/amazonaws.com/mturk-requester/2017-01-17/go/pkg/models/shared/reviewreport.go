package shared

// ReviewReport
//
//	Contains both ReviewResult and ReviewAction elements for a particular HIT.
type ReviewReport struct {
	ReviewActions []ReviewActionDetail `json:"ReviewActions,omitempty"`
	ReviewResults []ReviewResultDetail `json:"ReviewResults,omitempty"`
}
