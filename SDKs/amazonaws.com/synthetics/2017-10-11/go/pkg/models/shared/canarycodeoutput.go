package shared

type CanaryCodeOutput struct {
	Handler           *string `json:"Handler,omitempty"`
	SourceLocationArn *string `json:"SourceLocationArn,omitempty"`
}
