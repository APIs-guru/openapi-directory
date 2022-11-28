package shared

// ResizeVolumeRequest
// Request for emergency resize Volume.
type ResizeVolumeRequest struct {
	SizeGib *string `json:"sizeGib,omitempty"`
}
