package shared

type APIOperation struct {
	MethodSelectors []MethodSelector `json:"methodSelectors"`
	ServiceName     *string          `json:"serviceName"`
}
