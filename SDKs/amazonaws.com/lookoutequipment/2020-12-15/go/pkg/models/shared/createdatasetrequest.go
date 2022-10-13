package shared

type CreateDatasetRequest struct {
	ClientToken        string        `json:"ClientToken"`
	DatasetName        string        `json:"DatasetName"`
	DatasetSchema      DatasetSchema `json:"DatasetSchema"`
	ServerSideKmsKeyID *string       `json:"ServerSideKmsKeyId"`
	Tags               []Tag         `json:"Tags"`
}
