package shared

type DescribeEntityResponse struct {
	Details          *string `json:"Details"`
	EntityArn        *string `json:"EntityArn"`
	EntityIdentifier *string `json:"EntityIdentifier"`
	EntityType       *string `json:"EntityType"`
	LastModifiedDate *string `json:"LastModifiedDate"`
}
