package shared

type Volume struct {
	Name       *string  `json:"name,omitempty"`
	SizeGb     *float64 `json:"sizeGb,omitempty"`
	VolumeType *string  `json:"volumeType,omitempty"`
}
