package shared

type ListAwsServiceAccessForOrganizationResponse struct {
	EnabledServicePrincipals []EnabledServicePrincipal `json:"EnabledServicePrincipals"`
	NextToken                *string                   `json:"NextToken"`
}
