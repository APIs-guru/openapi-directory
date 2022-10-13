package shared

type ApprovalRequest struct {
	Approve                     *ApproveDecision    `json:"approve"`
	Dismiss                     *DismissDecision    `json:"dismiss"`
	Name                        *string             `json:"name"`
	RequestTime                 *string             `json:"requestTime"`
	RequestedExpiration         *string             `json:"requestedExpiration"`
	RequestedLocations          *AccessLocations    `json:"requestedLocations"`
	RequestedReason             *AccessReason       `json:"requestedReason"`
	RequestedResourceName       *string             `json:"requestedResourceName"`
	RequestedResourceProperties *ResourceProperties `json:"requestedResourceProperties"`
}
