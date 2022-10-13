package shared

type DescribeUserRequest struct {
	OrganizationID string `json:"OrganizationId"`
	UserID         string `json:"UserId"`
}
