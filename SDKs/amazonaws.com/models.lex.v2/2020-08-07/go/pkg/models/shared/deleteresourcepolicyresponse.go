package shared

type DeleteResourcePolicyResponse struct {
	ResourceArn *string `json:"resourceArn"`
	RevisionID  *string `json:"revisionId"`
}
