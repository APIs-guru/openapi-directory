package shared

type ReviewReport struct {
	ReviewActions []ReviewActionDetail `json:"ReviewActions"`
	ReviewResults []ReviewResultDetail `json:"ReviewResults"`
}
