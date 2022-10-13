package shared

type AttachedDisk struct {
	Path     *string `json:"path"`
	SizeInGb *int64  `json:"sizeInGb"`
}
