package shared

type BadRequest struct {
	Name     *string      `json:"name"`
	Problems []BadRequest `json:"problems"`
	Status   *int64       `json:"status"`
	Title    *string      `json:"title"`
	Type     *string      `json:"type"`
}
