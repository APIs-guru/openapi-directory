package shared

// RestoreInfo1
// Information about a table restore.
type RestoreInfo1 struct {
	SourceType *RestoreInfoSourceTypeEnum `json:"sourceType,omitempty"`
}
