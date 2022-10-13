package shared

type Stream struct {
	StreamArn   *string `json:"StreamArn"`
	StreamLabel *string `json:"StreamLabel"`
	TableName   *string `json:"TableName"`
}
