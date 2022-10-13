package shared

type ApplicationRestoreConfiguration struct {
	ApplicationRestoreType ApplicationRestoreTypeEnum `json:"ApplicationRestoreType"`
	SnapshotName           *string                    `json:"SnapshotName"`
}
