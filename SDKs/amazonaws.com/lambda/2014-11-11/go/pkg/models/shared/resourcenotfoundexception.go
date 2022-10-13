package shared

type ResourceNotFoundException struct {
	Message *string `json:"Message"`
	Type    *string `json:"Type"`
}
