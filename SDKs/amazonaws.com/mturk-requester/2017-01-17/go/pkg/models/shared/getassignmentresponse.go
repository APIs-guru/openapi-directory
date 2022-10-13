package shared

type GetAssignmentResponse struct {
	Assignment *Assignment `json:"Assignment"`
	Hit        *Hit        `json:"HIT"`
}
