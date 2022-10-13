package shared

type Meta struct {
	Msg        *string `json:"msg"`
	ResponseID *string `json:"response_id"`
	Status     *int32  `json:"status"`
}
