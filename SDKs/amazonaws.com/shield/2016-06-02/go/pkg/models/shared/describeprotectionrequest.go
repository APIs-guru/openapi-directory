package shared

type DescribeProtectionRequest struct {
	ProtectionID *string `json:"ProtectionId,omitempty"`
	ResourceArn  *string `json:"ResourceArn,omitempty"`
}
