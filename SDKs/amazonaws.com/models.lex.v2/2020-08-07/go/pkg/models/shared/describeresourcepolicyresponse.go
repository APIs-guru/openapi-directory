package shared

type DescribeResourcePolicyResponse struct {
	Policy      *string `json:"policy,omitempty"`
	ResourceArn *string `json:"resourceArn,omitempty"`
	RevisionID  *string `json:"revisionId,omitempty"`
}
