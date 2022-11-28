package shared

// Instance
// A complex type that contains information about an instance that Cloud Map creates when you submit a <code>RegisterInstance</code> request.
type Instance struct {
	Attributes       map[string]string `json:"Attributes,omitempty"`
	CreatorRequestID *string           `json:"CreatorRequestId,omitempty"`
	ID               string            `json:"Id"`
}
