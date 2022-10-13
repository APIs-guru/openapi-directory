package shared

type DeleteResourcePolicyStatementResponse struct {
	ResourceArn *string `json:"resourceArn"`
	RevisionID  *string `json:"revisionId"`
}
