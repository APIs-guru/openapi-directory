package shared

// ListApprovalRequestsResponse
// Response to listing of ApprovalRequest objects.
type ListApprovalRequestsResponse struct {
	ApprovalRequests []ApprovalRequest `json:"approvalRequests,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
}
