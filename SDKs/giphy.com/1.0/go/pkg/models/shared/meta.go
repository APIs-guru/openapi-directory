package shared

type Meta struct {
	Msg        *string `json:"msg,omitempty"`
	ResponseID *string `json:"response_id,omitempty"`
	Status     *int32  `json:"status,omitempty"`
}
