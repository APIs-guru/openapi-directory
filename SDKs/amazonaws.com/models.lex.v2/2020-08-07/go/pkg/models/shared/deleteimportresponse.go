package shared

type DeleteImportResponse struct {
	ImportID     *string           `json:"importId,omitempty"`
	ImportStatus *ImportStatusEnum `json:"importStatus,omitempty"`
}
