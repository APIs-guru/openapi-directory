package shared

// ListProvisioningQuotasResponse
// Response message for the list of provisioning quotas.
type ListProvisioningQuotasResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	ProvisioningQuotas []ProvisioningQuota `json:"provisioningQuotas,omitempty"`
}
