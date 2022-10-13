package shared

type DiskInfo struct {
	IsSystemDisk *bool   `json:"isSystemDisk"`
	Name         *string `json:"name"`
	Path         *string `json:"path"`
	SizeInGb     *int64  `json:"sizeInGb"`
}
