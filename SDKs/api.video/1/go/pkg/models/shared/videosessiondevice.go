package shared

// VideoSessionDevice
// What type of device the user is on when in the video session.
type VideoSessionDevice struct {
	Model  *string `json:"model,omitempty"`
	Type   *string `json:"type,omitempty"`
	Vendor *string `json:"vendor,omitempty"`
}
