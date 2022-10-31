package shared

type ReviewReport struct {
	ReviewActions []ReviewActionDetail `json:"ReviewActions,omitempty"`
	ReviewResults []ReviewResultDetail `json:"ReviewResults,omitempty"`
}
