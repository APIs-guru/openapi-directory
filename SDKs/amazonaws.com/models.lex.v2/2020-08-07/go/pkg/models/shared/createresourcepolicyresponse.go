package shared

type CreateResourcePolicyResponse struct {
	ResourceArn *string `json:"resourceArn"`
	RevisionID  *string `json:"revisionId"`
}
