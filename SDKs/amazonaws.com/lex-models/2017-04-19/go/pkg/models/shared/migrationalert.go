package shared

type MigrationAlert struct {
	Details       []string                `json:"details"`
	Message       *string                 `json:"message"`
	ReferenceUrLs []string                `json:"referenceURLs"`
	Type          *MigrationAlertTypeEnum `json:"type"`
}
