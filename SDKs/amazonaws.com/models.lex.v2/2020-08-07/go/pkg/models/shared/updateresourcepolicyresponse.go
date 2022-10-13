package shared

type UpdateResourcePolicyResponse struct {
	ResourceArn *string `json:"resourceArn"`
	RevisionID  *string `json:"revisionId"`
}
