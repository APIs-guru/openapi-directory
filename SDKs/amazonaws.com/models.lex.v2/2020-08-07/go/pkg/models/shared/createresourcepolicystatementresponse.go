package shared

type CreateResourcePolicyStatementResponse struct {
	ResourceArn *string `json:"resourceArn,omitempty"`
	RevisionID  *string `json:"revisionId,omitempty"`
}
