package shared

type DescribeResourcePolicyResponse struct {
	Policy      *string `json:"policy"`
	ResourceArn *string `json:"resourceArn"`
	RevisionID  *string `json:"revisionId"`
}
