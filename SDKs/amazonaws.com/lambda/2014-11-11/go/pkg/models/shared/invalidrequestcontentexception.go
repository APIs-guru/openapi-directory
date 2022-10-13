package shared

type InvalidRequestContentException struct {
	Type    *string `json:"Type"`
	Message *string `json:"message"`
}
