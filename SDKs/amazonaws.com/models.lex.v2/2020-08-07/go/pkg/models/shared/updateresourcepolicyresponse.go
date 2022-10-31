package shared

type UpdateResourcePolicyResponse struct {
	ResourceArn *string `json:"resourceArn,omitempty"`
	RevisionID  *string `json:"revisionId,omitempty"`
}
