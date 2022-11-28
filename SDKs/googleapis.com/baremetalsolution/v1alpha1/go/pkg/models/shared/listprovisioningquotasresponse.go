package shared

// ListProvisioningQuotasResponse
// Response for ListProvisioningQuotas.
type ListProvisioningQuotasResponse struct {
	NextPageToken      *string             `json:"nextPageToken,omitempty"`
	ProvisioningQuotas []ProvisioningQuota `json:"provisioningQuotas,omitempty"`
}
