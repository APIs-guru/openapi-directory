package shared

type ListSecretsResponse struct {
	NextToken  *string           `json:"NextToken"`
	SecretList []SecretListEntry `json:"SecretList"`
}
