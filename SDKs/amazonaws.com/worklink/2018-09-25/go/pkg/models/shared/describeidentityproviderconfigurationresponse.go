package shared

type DescribeIdentityProviderConfigurationResponse struct {
	IdentityProviderSamlMetadata *string                   `json:"IdentityProviderSamlMetadata"`
	IdentityProviderType         *IdentityProviderTypeEnum `json:"IdentityProviderType"`
	ServiceProviderSamlMetadata  *string                   `json:"ServiceProviderSamlMetadata"`
}
