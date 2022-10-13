package shared

type DeleteImportResponse struct {
	ImportID     *string           `json:"importId"`
	ImportStatus *ImportStatusEnum `json:"importStatus"`
}
