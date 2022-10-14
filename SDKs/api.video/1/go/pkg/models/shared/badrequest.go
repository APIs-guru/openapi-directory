package shared

type BadRequest struct {
	Name     *string      `json:"name,omitempty"`
	Problems []BadRequest `json:"problems,omitempty"`
	Status   *int64       `json:"status,omitempty"`
	Title    *string      `json:"title,omitempty"`
	Type     *string      `json:"type,omitempty"`
}
