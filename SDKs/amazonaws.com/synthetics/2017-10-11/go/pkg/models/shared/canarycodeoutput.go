package shared

// CanaryCodeOutput
// This structure contains information about the canary's Lambda handler and where its code is stored by CloudWatch Synthetics.
type CanaryCodeOutput struct {
	Handler           *string `json:"Handler,omitempty"`
	SourceLocationArn *string `json:"SourceLocationArn,omitempty"`
}
