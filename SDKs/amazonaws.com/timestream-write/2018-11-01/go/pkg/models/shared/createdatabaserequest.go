package shared

type CreateDatabaseRequest struct {
	DatabaseName string  `json:"DatabaseName"`
	KmsKeyID     *string `json:"KmsKeyId"`
	Tags         []Tag   `json:"Tags"`
}
