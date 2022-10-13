package shared

type ListSecretVersionIdsResponse struct {
	Arn       *string                   `json:"ARN"`
	Name      *string                   `json:"Name"`
	NextToken *string                   `json:"NextToken"`
	Versions  []SecretVersionsListEntry `json:"Versions"`
}
