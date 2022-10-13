package shared

type ListApprovalRequestsResponse struct {
	ApprovalRequests []ApprovalRequest `json:"approvalRequests"`
	NextPageToken    *string           `json:"nextPageToken"`
}
