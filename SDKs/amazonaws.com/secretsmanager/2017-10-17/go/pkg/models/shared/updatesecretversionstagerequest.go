package shared

type UpdateSecretVersionStageRequest struct {
	MoveToVersionID     *string `json:"MoveToVersionId,omitempty"`
	RemoveFromVersionID *string `json:"RemoveFromVersionId,omitempty"`
	SecretID            string  `json:"SecretId"`
	VersionStage        string  `json:"VersionStage"`
}
