package shared

type DescribeProtectionRequest struct {
	ProtectionID *string `json:"ProtectionId"`
	ResourceArn  *string `json:"ResourceArn"`
}
