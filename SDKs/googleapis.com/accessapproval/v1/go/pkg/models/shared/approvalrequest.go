package shared



type ApprovalRequest struct {
    Approve *ApproveDecision `json:"approve,omitempty"`
    Dismiss *DismissDecision `json:"dismiss,omitempty"`
    Name *string `json:"name,omitempty"`
    RequestTime *string `json:"requestTime,omitempty"`
    RequestedExpiration *string `json:"requestedExpiration,omitempty"`
    RequestedLocations *AccessLocations `json:"requestedLocations,omitempty"`
    RequestedReason *AccessReason `json:"requestedReason,omitempty"`
    RequestedResourceName *string `json:"requestedResourceName,omitempty"`
    RequestedResourceProperties *ResourceProperties `json:"requestedResourceProperties,omitempty"`
    
}

