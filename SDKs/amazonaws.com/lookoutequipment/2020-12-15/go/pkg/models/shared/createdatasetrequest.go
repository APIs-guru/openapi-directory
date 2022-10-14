package shared

type CreateDatasetRequest struct {
	ClientToken        string        `json:"ClientToken"`
	DatasetName        string        `json:"DatasetName"`
	DatasetSchema      DatasetSchema `json:"DatasetSchema"`
	ServerSideKmsKeyID *string       `json:"ServerSideKmsKeyId,omitempty"`
	Tags               []Tag         `json:"Tags,omitempty"`
}
