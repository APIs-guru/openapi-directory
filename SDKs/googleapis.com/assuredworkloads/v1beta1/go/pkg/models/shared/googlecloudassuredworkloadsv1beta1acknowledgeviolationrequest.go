package shared

// GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest
// Request for acknowledging the violation Next Id: 4
type GoogleCloudAssuredworkloadsV1beta1AcknowledgeViolationRequest struct {
	Comment               *string `json:"comment,omitempty"`
	NonCompliantOrgPolicy *string `json:"nonCompliantOrgPolicy,omitempty"`
}
