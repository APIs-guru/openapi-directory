package shared

type Volume struct {
	Name       *string  `json:"name"`
	SizeGb     *float64 `json:"sizeGb"`
	VolumeType *string  `json:"volumeType"`
}
