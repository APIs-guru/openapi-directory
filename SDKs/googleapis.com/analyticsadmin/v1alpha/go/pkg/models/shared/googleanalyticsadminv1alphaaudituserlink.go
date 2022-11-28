package shared

// GoogleAnalyticsAdminV1alphaAuditUserLink
// Read-only resource used to summarize a principal's effective roles.
type GoogleAnalyticsAdminV1alphaAuditUserLink struct {
	DirectRoles    []string `json:"directRoles,omitempty"`
	EffectiveRoles []string `json:"effectiveRoles,omitempty"`
	EmailAddress   *string  `json:"emailAddress,omitempty"`
	Name           *string  `json:"name,omitempty"`
}
