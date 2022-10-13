package shared

type UpdateSecretVersionStageRequest struct {
	MoveToVersionID     *string `json:"MoveToVersionId"`
	RemoveFromVersionID *string `json:"RemoveFromVersionId"`
	SecretID            string  `json:"SecretId"`
	VersionStage        string  `json:"VersionStage"`
}
