package shared

type DeleteResourcePolicyStatementResponse struct {
	ResourceArn *string `json:"resourceArn,omitempty"`
	RevisionID  *string `json:"revisionId,omitempty"`
}
