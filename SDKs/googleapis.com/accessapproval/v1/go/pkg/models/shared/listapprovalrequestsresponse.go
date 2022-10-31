package shared



type ListApprovalRequestsResponse struct {
    ApprovalRequests []ApprovalRequest `json:"approvalRequests,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

