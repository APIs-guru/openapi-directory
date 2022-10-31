package shared

type LimitExceededException struct {
	Message *string `json:"message,omitempty"`
}
