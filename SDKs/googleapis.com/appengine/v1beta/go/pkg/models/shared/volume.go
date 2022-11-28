package shared

// Volume
// Volumes mounted within the app container. Only applicable in the App Engine flexible environment.
type Volume struct {
	Name       *string  `json:"name,omitempty"`
	SizeGb     *float64 `json:"sizeGb,omitempty"`
	VolumeType *string  `json:"volumeType,omitempty"`
}
