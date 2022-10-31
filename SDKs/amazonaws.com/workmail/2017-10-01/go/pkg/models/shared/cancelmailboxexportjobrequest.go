package shared

type CancelMailboxExportJobRequest struct {
	ClientToken    string `json:"ClientToken"`
	JobID          string `json:"JobId"`
	OrganizationID string `json:"OrganizationId"`
}
