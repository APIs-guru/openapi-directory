package shared

type UpdateAliasRequest struct {
	AliasName   string `json:"AliasName"`
	TargetKeyID string `json:"TargetKeyId"`
}
