package shared

// GoogleCloudApigeeV1ProvisionOrganizationRequest
// Request for ProvisionOrganization.
type GoogleCloudApigeeV1ProvisionOrganizationRequest struct {
	AnalyticsRegion   *string `json:"analyticsRegion,omitempty"`
	AuthorizedNetwork *string `json:"authorizedNetwork,omitempty"`
	RuntimeLocation   *string `json:"runtimeLocation,omitempty"`
}
