package shared

type CreateDatasetGroupRequest struct {
	KmsKeyArn *string `json:"kmsKeyArn"`
	Name      string  `json:"name"`
	RoleArn   *string `json:"roleArn"`
}
