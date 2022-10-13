package shared

type UpdateTableRequest struct {
	DatabaseName        string              `json:"DatabaseName"`
	RetentionProperties RetentionProperties `json:"RetentionProperties"`
	TableName           string              `json:"TableName"`
}
