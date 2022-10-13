package shared

type ProblemDetails struct {
	Detail   *string `json:"detail"`
	Instance *string `json:"instance"`
	Status   *int64  `json:"status"`
	Title    *string `json:"title"`
	Type     *string `json:"type"`
}
