package shared

type DeleteResourcePolicyResponse struct {
	ResourceArn *string `json:"resourceArn,omitempty"`
	RevisionID  *string `json:"revisionId,omitempty"`
}
