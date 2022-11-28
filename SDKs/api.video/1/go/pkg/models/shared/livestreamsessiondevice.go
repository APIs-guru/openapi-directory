package shared

// LiveStreamSessionDevice
// What type of device the user is on when in the live stream session.
type LiveStreamSessionDevice struct {
	Model  *string `json:"model,omitempty"`
	Type   *string `json:"type,omitempty"`
	Vendor *string `json:"vendor,omitempty"`
}
