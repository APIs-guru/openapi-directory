package shared

// FileEvidence
// This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute.
type FileEvidence struct {
	FileID *string `json:"fileId,omitempty"`
}
