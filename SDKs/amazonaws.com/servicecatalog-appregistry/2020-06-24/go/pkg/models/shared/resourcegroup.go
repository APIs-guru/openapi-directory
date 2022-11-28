package shared

// ResourceGroup
// The information about the resource group integration.
type ResourceGroup struct {
	Arn          *string                 `json:"arn,omitempty"`
	ErrorMessage *string                 `json:"errorMessage,omitempty"`
	State        *ResourceGroupStateEnum `json:"state,omitempty"`
}
