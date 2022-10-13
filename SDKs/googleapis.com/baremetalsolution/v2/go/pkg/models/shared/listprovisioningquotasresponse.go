package shared

type ListProvisioningQuotasResponse struct {
	NextPageToken      *string             `json:"nextPageToken"`
	ProvisioningQuotas []ProvisioningQuota `json:"provisioningQuotas"`
}
