package shared

type GetAssignmentResponse struct {
	Assignment *Assignment `json:"Assignment,omitempty"`
	Hit        *Hit        `json:"HIT,omitempty"`
}
