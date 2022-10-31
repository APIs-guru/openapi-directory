package shared

type ExpansionFile struct {
	FileSize          *string `json:"fileSize,omitempty"`
	ReferencesVersion *int32  `json:"referencesVersion,omitempty"`
}
