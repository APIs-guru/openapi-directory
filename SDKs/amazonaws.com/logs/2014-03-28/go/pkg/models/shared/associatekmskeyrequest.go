package shared

type AssociateKmsKeyRequest struct {
	KmsKeyID     string `json:"kmsKeyId"`
	LogGroupName string `json:"logGroupName"`
}
